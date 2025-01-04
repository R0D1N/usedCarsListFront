const removeNullishFields = (object = {}) =>
  Object.fromEntries(
    Object.entries(object).filter(([, value]) => value || value === 0),
  );

export { removeNullishFields };
