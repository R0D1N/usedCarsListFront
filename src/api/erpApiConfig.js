import { getData, postData } from "./fetchData.js";

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
];

export default erpApiConfig;
