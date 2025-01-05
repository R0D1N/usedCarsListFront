import {
  getBrandListService,
  getCarByIdService,
  getCarsListService,
  getSeriesListService,
} from "./service.js";

const STATUS_OK = 200;
const STATUS_BAD = 500;
const getCarsListController = async (req, res) => {
  try {
    const { query } = req;
    const cars = await getCarsListService({ query });
    res.status(STATUS_OK).json(cars);
  } catch (error) {
    res.status(STATUS_BAD).json({ error });
  }
};

const getCarByIdController = async (req, res) => {
  try {
    const { params } = req;
    const cars = await getCarByIdService(params.id);
    res.status(STATUS_OK).json(cars);
  } catch (error) {
    res.status(STATUS_BAD).json({ error });
  }
};

const getBrandListController = async (req, res) => {
  try {
    const brands = await getBrandListService();
    res.status(STATUS_OK).json(brands);
  } catch (error) {
    res.status(STATUS_BAD).json({ error });
  }
};

const getSeriesListController = async (req, res) => {
  try {
    const { params } = req;
    const series = await getSeriesListService(params.id);
    res.status(STATUS_OK).json(series);
  } catch (error) {
    res.status(STATUS_BAD).json({ error });
  }
};

export {
  getCarsListController,
  getCarByIdController,
  getBrandListController,
  getSeriesListController,
};
