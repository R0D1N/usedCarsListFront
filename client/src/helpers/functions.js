const scrollToElement = (element) => {
  element.current.scrollIntoView({ behavior: "smooth" });
};

const searchParamsObject = (params) => {
  return params.entries().reduce((acc, current) => {
    return { ...acc, [current[0]]: current[1] };
  }, {});
};

export { scrollToElement, searchParamsObject };
