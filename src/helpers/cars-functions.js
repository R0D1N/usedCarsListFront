import pipe from "./fp.js";

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

export { carsListMapper };
