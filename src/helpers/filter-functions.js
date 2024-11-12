export { getYears };

const getYears = (cars) => {
  const years = cars.map((car) => car.year);
  return [...new Set(years)].sort((a, b) => a - b);
};
