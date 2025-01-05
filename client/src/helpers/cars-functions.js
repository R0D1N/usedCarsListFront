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

const renameFieldsBrands = ({ brand, brand_id: brandId }) => {
  return {
    title: brand,
    value: brandId,
  };
};

const brandListMapper = pipe(renameFieldsBrands);

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

const renameFieldsModels = ({ series, series_id: seriesId }) => {
  return {
    title: series,
    value: seriesId,
  };
};

const modelMapper = pipe(renameFieldsModels);

export { carsListMapper, brandListMapper, carMapper, modelMapper };
