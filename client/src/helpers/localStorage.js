export { getItemLocalStorage, setItemLocalStorage };

const getItemLocalStorage = (item) => {
  try {
    return localStorage.getItem(item);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw e;
  }
};

const setItemLocalStorage = (item) => (value) => {
  try {
    localStorage.setItem(item, value);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    throw e;
  }
};
