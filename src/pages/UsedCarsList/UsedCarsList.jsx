import React from "react";
import mockedList from "../mockedList.js";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter/Filter.jsx";
import Card from "./Card/Card.jsx";
import FILTERS_CONFIG from "./Filter/filterConfig.js";

const findFilter = (key) => (filterConfig) => filterConfig.queryParam === key;

const filterCar = (filterFn, name) => (car) => filterFn(car[name]);

const filterList = (cars, searchParams) => {
  let filteredList = cars;
  for (const pair of searchParams.entries()) {
    const [key] = pair;

    const filterConfig = FILTERS_CONFIG({ cars, searchParams });

    const { filterFn, field } = filterConfig.find(findFilter(key));

    filteredList = filteredList.filter(filterCar(filterFn, field));
  }
  return filteredList;
};

const UsedCarsList = () => {
  const [searchParams] = useSearchParams();

  const filteredArray = filterList(mockedList, searchParams);

  return (
    <div className="row g-4">
      <div className="col-12 col-md-12 col-lg-3">
        <Filter cars={mockedList} />
      </div>
      <div className="col-12 col-md-12 col-lg-9">
        {filteredArray.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default UsedCarsList;
