import { apiMethods } from "../../../api/apiMethods.js";
import { modelMapper } from "../../../helpers/cars-functions.js";

const YEARS = [
  { title: 2018, value: 2018 },
  { title: 2019, value: 2019 },
  { title: 2020, value: 2020 },
  { title: 2021, value: 2021 },
  { title: 2022, value: 2022 },
  { title: 2023, value: 2023 },
  { title: 2024, value: 2024 },
  { title: 2025, value: 2025 },
];

const FILTERS_CONFIG = ({ brands, models, searchParams }) => [
  {
    title: "Brand",
    field: "brand",
    queryParam: "brand_id",
    type: "select",
    options: brands || [],
    value: searchParams.get("brand_id") || "",
    placeholder: "Select a brand",
    filterFn: (value) => value === searchParams.get("brand_id"),
    onChangeHandler: (value, setFilters) => {
      if (!value) return;

      async function getSeriesList() {
        const { results } = await apiMethods.getSeriesList({
          params: { id: value },
        });

        const mappedModels = results.map(modelMapper);

        setFilters((prev) => {
          const model = prev.find((item) => item.field === "model");
          model.options = mappedModels;
          const filters = prev.filter((item) => item.field !== "model");
          filters.splice(1, 0, model);
          return filters;
        });
      }
      getSeriesList();
    },
  },
  {
    title: "Model",
    field: "model",
    queryParam: "series_id",
    type: "select",
    options: models || [],
    value: searchParams.get("series_id") || "",
    placeholder: "Select a model",
    filterFn: (value) => value === searchParams.get("series_id"),
    onChangeHandler: () => {},
  },
  {
    title: "Year from",
    field: "year_min",
    queryParam: "year_min",
    type: "select",
    options: YEARS,
    value: searchParams.get("year_min") || "",
    placeholder: "From",
    filterFn: (value) => value >= searchParams.get("year_min"),
    onChangeHandler: () => {},
  },
  {
    title: "Year to",
    field: "year_max",
    queryParam: "year_max",
    type: "select",
    options: YEARS,
    value: searchParams.get("year_max") || "",
    placeholder: "To",
    filterFn: (value) => value <= searchParams.get("year_max"),
    onChangeHandler: () => {},
  },
];

export default FILTERS_CONFIG;
