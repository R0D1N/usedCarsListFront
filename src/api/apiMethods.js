import erpApiConfig from "./erpApiConfig.js";

export { endpointReducer, apiMethods };

const baseUrl = import.meta.env?.VITE_API_BASE_URL;

const endpointReducer = (accumulator, endpoint) => {
  const { name, url, method, errorMessage } = endpoint;
  accumulator[name] = () => method({ url, errorMessage });
  return accumulator;
};

const apiMethods = erpApiConfig(baseUrl).reduce(endpointReducer, {});
