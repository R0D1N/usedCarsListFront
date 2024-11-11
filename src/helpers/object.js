import { toLower, includes, toString } from "./string.js";

export {
  removeNullishFields,
  removeNullishObject,
  replaceNullUndefinedWithEmptyString,
  searchObjectsByKeyAndValue,
  sortByDescendingKey,
  sliceObjectArrays,
};

const removeNullishFields = (object = {}) =>
  Object.fromEntries(
    Object.entries(object).filter(([, value]) => value || value === 0),
  );

const removeNullishObject = (object) =>
  Object.fromEntries(
    Object.entries(object).filter(([, value]) =>
      object.constructor === Object && Object.keys(value).length === 0
        ? null
        : value,
    ),
  );

const replaceNullUndefinedWithEmptyString = (object) =>
  Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      key,
      value == null ? "" : value,
    ]),
  );

const searchObjectsByKeyAndValue = (arrayOfObjects) => (key, searchInput) =>
  arrayOfObjects.filter(getFilteredArrayOfObjects(key, searchInput));

const getFilteredArrayOfObjects = (key, searchInput) => (object) =>
  Number.isFinite(searchInput)
    ? includes(toString(object[key]), toString(searchInput))
    : includes(toLower(object[key]), toLower(searchInput));

const sortByDescendingKey = (arrayOfObjects, key) => {
  return arrayOfObjects.slice().sort((a, b) => b[key] - a[key]);
};

const sliceObjectArrays = (obj, value) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: Array.isArray(obj[key]) ? obj[key].slice(value) : obj[key],
    }),
    {},
  );
