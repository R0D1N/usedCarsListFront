import { getData } from "./fetchData.js";

const carsApiConfig = (baseURL) => [
  {
    name: "getCars",
    url: `http://8.209.113.173/api/carlist`,
    method: getData,
    errorMessage: "Failed to get car list",
  },
  {
    name: "getCarById",
    url: `http://8.209.113.173/api/cardetail`,
    method: getData,
    errorMessage: "Failed to get car",
  },
  {
    name: "getBrands",
    url: `http://8.209.113.173/api/brandlist`,
    method: getData,
    errorMessage: "Failed to get brands",
  },
  {
    name: "getSeries",
    url: `http://8.209.113.173/api/serieslist`,
    method: getData,
    errorMessage: "Failed to get series",
  },
];

export default carsApiConfig;
