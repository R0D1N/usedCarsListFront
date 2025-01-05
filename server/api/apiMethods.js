import carsApiConfig from "./carsApiConfig.js";

const endpointReducer = (accumulator, endpoint) => {
  const { name, url, method, errorMessage } = endpoint;
  accumulator[name] = ({ query = {} } = {}) =>
    method({ url, errorMessage, query });
  return accumulator;
};

const apiMethods = carsApiConfig("").reduce(endpointReducer, {});

export { endpointReducer, apiMethods };
