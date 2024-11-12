export { getAllBrands, normalizeFilter };

const getAllBrands = (cars) => {
  const brands = cars.map((car) => car.brand);
  return [...new Set(brands)];
};

const normalizeFilter = (searchText = "") => searchText.trim().toLowerCase();
