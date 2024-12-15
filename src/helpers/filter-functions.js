import FILTERS_CONFIG from "../pages/UsedCarsList/Filter/filterConfig.js";

const findFilter = (key) => (filterConfig) => filterConfig.queryParam === key;

const filterCar = (filterFn, name) => (car) => filterFn(car[name]);

const filterList = (cars, searchParams) => {
  let filteredList = cars;
  // eslint-disable-next-line no-restricted-syntax
  for (const pair of searchParams.entries()) {
    const [key] = pair;

    const filterConfig = FILTERS_CONFIG({ cars, searchParams });

    const { filterFn, field } = filterConfig.find(findFilter(key));

    filteredList = filteredList.filter(filterCar(filterFn, field));
  }
  return filteredList;
};

// eslint-disable-next-line import/prefer-default-export
export { filterList };
