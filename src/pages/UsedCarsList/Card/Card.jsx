import { Link } from "react-router-dom";
import React from "react";
import "./style.sass";

const CHARACTERISTIC_TYPES = [
  {
    name: "gearBox",
    icon: "fa-light fa-circle-a",
  },
  {
    name: "mileage",
    icon: "fa-light fa-gauge-high",
  },
  {
    name: "city",
    icon: "fa-light fa-location-dot",
  },
  {
    name: "type",
    icon: "fa-light fa-car-battery",
  },
];

const renderHeading = (brand, model, year, id) => {
  return (
    <div className="mb-1">
      <Link className="fs-5 text-decoration-none" to={`/car/${id}`}>
        {brand} {model} {year}
      </Link>
    </div>
  );
};

const renderGeneration = (generation) => {
  const generationText = generation.join(" • ");
  return (
    <div className="mb-1">
      <span className="fs-6">{generationText}</span>
    </div>
  );
};

const renderPrice = (price) => {
  return (
    <div className="mb-1 hstack gap-2">
      <span className="h4 text-success">{price} $</span>
      <span className="text-muted">•</span>
      <span className="fs-6">{price * 41.2} грн з ПДВ</span>
    </div>
  );
};

const renderCharacteristic = (characteristic) => {
  return (
    <div className="row g-0 mb-1">
      {CHARACTERISTIC_TYPES.map(({ name, icon }) => {
        const value = characteristic[name] || "Not specified";
        return (
          <div key={name} className="col-6 mb-1">
            <div className="d-flex align-items-center">
              <i className={`${icon} me-2 text-danger`} />
              <span className="text-muted">{value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const renderDescription = (description) => {
  return (
    <div className="text-truncate w-100">
      <span>{description}</span>
    </div>
  );
};

const Card = ({
  image,
  model,
  description,
  brand,
  id,
  year,
  generation = [],
  price,
  characteristic = {},
}) => {
  return (
    <section className="col mb-3">
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-5">
            {image && (
              <div className="ratio ratio-4x3 ria-card-image position-relative">
                <img
                  src={image}
                  className="rounded-start object-fit-cover"
                  alt={model}
                />
                <Link to={`/car/${id}`} className="stretched-link" />
              </div>
            )}
          </div>
          <div className="col-7">
            <div className="card-body">
              {renderHeading(brand, model, year, id)}
              {renderGeneration(generation)}
              {renderPrice(price)}
              {renderCharacteristic(characteristic)}
              {renderDescription(description)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
