import { getData } from "./fetchData.js";

const erpApiConfig = (baseURL) => [
  {
    name: "getCompanies",
    url: `${baseURL}/companies`,
    method: getData,
    errorMessage: "Failed to get dashboard",
  },
  {
    name: "getLocations",
    url: `${baseURL}/locations`,
    method: getData,
    errorMessage: "Failed to get dashboard",
  },
  {
    name: "getCarsList",
    url: "http://localhost:3000/api/v1/cars",
    method: getData,
    errorMessage: "Failed to get cars list",
  },
];

export default erpApiConfig;
