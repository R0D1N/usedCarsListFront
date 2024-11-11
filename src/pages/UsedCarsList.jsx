import React from "react";
import mockedList from "./mockedList";
import { Link } from "react-router-dom";

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

const UsedCarsList = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {mockedList.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default UsedCarsList;
