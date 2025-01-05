import { apiMethods } from "../../api/apiMethods.js";

const getCarsListService = async ({ query }) => {
  return apiMethods.getCars({ query });
};

const getCarByIdService = async (id) => {
  return apiMethods.getCarById({ query: { carid: id } });
};

const getBrandListService = async () => {
  return apiMethods.getBrands();
};

const getSeriesListService = async (id) => {
  return apiMethods.getSeries({ query: { brandid: id } });
};

export {
  getCarsListService,
  getCarByIdService,
  getBrandListService,
  getSeriesListService,
};
