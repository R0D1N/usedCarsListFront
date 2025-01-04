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

const renameFields = ({ brand, brand_id: brandId }) => {
  return {
    title: brand,
    value: brandId,
  };
};

const brandListMapper = pipe(renameFields);

const parseImages = (car) => {
  return {
    ...car,
    images: JSON.parse(car.images),
  };
};

const parseCarInfo = (car) => {
  return {
    ...car,
    carInfo: JSON.parse(car.carinfo),
  };
};

const parseCharacteristics = (car) => {
  return {
    ...car,
    characteristics: JSON.parse(car.Characteristics),
  };
};

const removeRepeatedImages = (car) => {
  const images = new Set(car.images);
  return {
    ...car,
    images: Array.from(images),
  };
};

const carMapper = pipe(
  parseImages,
  parseCarInfo,
  parseCharacteristics,
  removeRepeatedImages,
  formatePrice,
);

export { carsListMapper, brandListMapper, carMapper };
