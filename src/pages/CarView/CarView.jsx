import "./style.sass";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Price from "../../components/Price.jsx";
import Carousel from "../../components/Carousel.jsx";
import { apiMethods } from "../../api/apiMethods.js";
import useFetchData from "../../hooks/useFecthData.js";
import Loader from "../../components/Loader/Loader.jsx";
import { carMapper } from "../../helpers/cars-functions.js";

const renderImageList = (activeImage, setActiveImage) =>
  function (imageSrc) {
    const handleClick = () => {
      setActiveImage(imageSrc);
    };
    return (
      <img
        key={imageSrc}
        src={imageSrc}
        alt="Thumbnail 1"
        className={`thumbnail rounded ${activeImage === imageSrc ? "active" : ""}`}
        onClick={handleClick}
      />
    );
  };

const renderTitle = (title) => {
  return <h2 className="mb-3">{title}</h2>;
};

const renderCharacteristics = (characteristics) => {
  return characteristics.map(({ category, details }) => {
    if (!details.length) return null;
    return (
      <div key={category} className="mb-3">
        <p className="mb-1">{category}</p>
        <ul>
          {details.map(({ name, value }) => {
            if (!value || value === "-") return null;
            return (
              <li key={name} className="mb-1">
                <span className="fs-6">{name}</span>
                {" - "}
                <span className="text-muted">{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
};

const renderCarInfo = (carInfo) => {
  return carInfo.map(({ name, value }) => {
    return (
      <div key={name} className="col-md-6 mb-3">
        <p className="mb-1">{name}</p>
        <span className="text-muted">{value}</span>
      </div>
    );
  });
};

function CarView() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState("");
  const { car, loading } = useFetchData([
    {
      name: "car",
      method: apiMethods.getCarById,
      params: { id },
    },
  ]);

  if (loading) return <Loader />;

  const mappedCar = carMapper(car[0]);

  if (!activeImage && mappedCar.images.length > 0)
    setActiveImage(mappedCar.images[0]);

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <Carousel
          images={mappedCar.images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <div className="hstack gap-3 overflow-x-auto">
          {mappedCar.images.map(renderImageList(activeImage, setActiveImage))}
        </div>
      </div>
      <div className="col-md-6">
        {renderTitle(mappedCar.title)}
        <Price price={mappedCar.price} />
        <h2>Car info</h2>
        <div className="row">{renderCarInfo(mappedCar.carInfo)}</div>
      </div>
      <h2>Характеристики</h2>
      {renderCharacteristics(mappedCar.characteristics)}
    </div>
  );
}

export default CarView;
