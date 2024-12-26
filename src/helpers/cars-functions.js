import pipe from "./fp.js";

const getAllBrands = (cars) => {
  const brands = cars.map((car) => car.brand);
  return [...new Set(brands)];
};

const getAllModels = (cars) => {
  const models = cars.map((car) => car.model);
  return [...new Set(models)];
};

const getYears = (cars) => {
  const years = cars.map((car) => car.year);
  return [...new Set(years)].sort((a, b) => a - b);
};

const setImages = (car) => {
  return {
    ...car,
    images: [car.thumbnail],
  };
};

const formatePrice = (car) => {
  const price = +car.price / 10;
  return {
    ...car,
    price,
  };
};

const carsListMapper = pipe(setImages, formatePrice);

export {
  getAllBrands,
  normalizeFilter,
  getAllModels,
  getYears,
  carsListMapper,
};

const normalizeFilter = (searchText = "") => searchText.trim().toLowerCase();
