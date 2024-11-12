import React from "react";
import mockedList from "../mockedList.js";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "./Filter.jsx";
import { normalizeFilter } from "../../helpers/cars-functions.js";

const Card = ({ image, model, description, brand, id }) => {
  return (
    <div className="col">
      <article className="card position-relative">
        <div className="ratio ratio-16x9">
          {image && (
            <img
              src={image}
              className="card-img-top object-fit-cover"
              alt={model}
            />
          )}
        </div>
        <div className="card-body">
          <h4 className="card-title">{brand}</h4>
          <h5 className="card-title">{model}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/car/${id}`} className="stretched-link" />
        </div>
      </article>
    </div>
  );
};

const filterList = (cars, filters) => {
  let filteredList = cars;
  for (const pair of filters.entries()) {
    const [key, value] = pair;
    if (key === "searchText") {
      filteredList = filteredList.filter(
        (car) =>
          normalizeFilter(car.model).includes(normalizeFilter(value)) ||
          normalizeFilter(car.brand).includes(normalizeFilter(value)),
      );
      continue;
    }

    filteredList = filteredList.filter((car) => {
      return normalizeFilter(car[key]).includes(normalizeFilter(value));
    });
  }
  return filteredList;
};

const UsedCarsList = () => {
  const [searchParams] = useSearchParams();

  const filteredArray = filterList(mockedList, searchParams);

  return (
    <>
      <Filter cars={mockedList} />
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {filteredArray.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </>
  );
};

export default UsedCarsList;
