export { getAllBrands, normalizeFilter, getAllModels };

const getAllBrands = (cars) => {
  const brands = cars.map((car) => car.brand);
  return [...new Set(brands)];
};

const getAllModels = (cars) => {
  const models = cars.map((car) => car.model);
  return [...new Set(models)];
};

const normalizeFilter = (searchText = "") => searchText.trim().toLowerCase();
