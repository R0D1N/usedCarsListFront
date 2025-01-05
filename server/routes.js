import {
  getCarsListController,
  getCarByIdController,
  getBrandListController,
  getSeriesListController,
} from "./modules/cars/controller.js";

const routes = [
  {
    endpoint: `/api/v1/cars`,
    handler: getCarsListController,
    method: "get",
  },
  {
    endpoint: `/api/v1/cars/:id`,
    handler: getCarByIdController,
    method: "get",
  },
  {
    endpoint: `/api/v1/brandlist`,
    handler: getBrandListController,
    method: "get",
  },
  {
    endpoint: `/api/v1/serieslist/:id`,
    handler: getSeriesListController,
    method: "get",
  },
];

export default routes;
