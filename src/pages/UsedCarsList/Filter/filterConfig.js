import {
  getAllBrands,
  getAllModels,
  getYears,
} from "../../../helpers/cars-functions.js";

const FILTERS_CONFIG = ({ cars, searchParams }) => [
  {
    title: "Brand",
    field: "brand",
    queryParam: "brand",
    type: "select",
    options: getAllBrands(cars),
    value: searchParams.get("brand") || "",
    placeholder: "Select a brand",
    filterFn: (value) => value === searchParams.get("brand"),
  },
  {
    title: "Model",
    field: "model",
    queryParam: "model",
    type: "select",
    options: getAllModels(cars),
    value: searchParams.get("model") || "",
    placeholder: "Select a model",
    filterFn: (value) => value === searchParams.get("model"),
  },
  {
    title: "Year from",
    field: "year",
    queryParam: "year_from",
    type: "select",
    options: getYears(cars),
    value: searchParams.get("year_from") || "",
    placeholder: "From",
    filterFn: (value) => value >= searchParams.get("year_from"),
  },
  {
    title: "Year to",
    field: "year",
    queryParam: "year_to",
    type: "select",
    options: getYears(cars),
    value: searchParams.get("year_to") || "",
    placeholder: "To",
    filterFn: (value) => value <= searchParams.get("year_to"),
  },
  {
    title: "Year to",
    field: "year",
    queryParam: "lte gte",
    type: "rangeSlider",
    options: getYears(cars),
    value: searchParams.get("lte gte") || "",
    placeholder: "To",
    filterFn: (value) => value <= searchParams.get("lte gte"),
  },
];

export default FILTERS_CONFIG;
