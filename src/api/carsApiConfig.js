import { getData } from "./fetchData.js";

const erpApiConfig = (baseURL) => [
  {
    name: "getCarById",
    url: ({ id }) => `http://localhost:3000/api/v1/cars/${id}`,
    method: getData,
    errorMessage: "Failed to get car",
  },
  {
    name: "getCarsList",
    url: () => "http://localhost:3000/api/v1/cars",
    method: getData,
    errorMessage: "Failed to get cars list",
  },
  {
    name: "getBrandList",
    url: () => "http://localhost:3000/api/v1/brandlist",
    method: getData,
    errorMessage: "Failed to get brands list",
  },
  {
    name: "getSeriesList",
    url: ({ id }) => `http://localhost:3000/api/v1/serieslist/${id}`,
    method: getData,
    errorMessage: "Failed to get series list",
  },
];

export default erpApiConfig;
