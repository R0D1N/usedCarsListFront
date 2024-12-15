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

export { getAllBrands, normalizeFilter, getAllModels, getYears };

const normalizeFilter = (searchText = "") => searchText.trim().toLowerCase();
