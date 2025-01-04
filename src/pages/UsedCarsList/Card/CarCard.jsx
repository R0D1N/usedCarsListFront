import { Link } from "react-router-dom";
import React from "react";
import "./style.sass";
import Price from "../../../components/Price.jsx";
import Generation from "../../../components/Generation.jsx";
import Characteristic from "../../../components/Characteristic.jsx";

const renderImage = (images, record) => {
  if (!images.length) return null;
  return (
    <div className="ratio ratio-4x3 ria-card-image position-relative">
      <img
        src={images[0]}
        className="rounded-start object-fit-cover"
        alt="Car"
      />
      <Link to={`/car/${record}`} className="stretched-link" />
    </div>
  );
};

const renderHeading = (title, record) => {
  return (
    <div className="mb-1">
      <Link className="fs-5 text-decoration-none" to={`/car/${record}`}>
        {title}
      </Link>
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

function CarCard({
  images,
  description,
  record,
  generation = [],
  price,
  title,
}) {
  return (
    <section className="col mb-3">
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-5">{renderImage(images, record)}</div>
          <div className="col-7">
            <div className="card-body">
              {renderHeading(title, record)}
              <Generation generation={generation} />
              <Price price={price} />
              {renderDescription(description)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarCard;
