import "./style.sass";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Price from "../../components/Price.jsx";
import Carousel from "../../components/Carousel.jsx";
import { apiMethods } from "../../api/apiMethods.js";
import useFetchData from "../../hooks/useFecthData.js";
import Loader from "../../components/Loader/Loader.jsx";

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
  const { car, loading } = useFetchData([
    {
      name: "car",
      method: apiMethods.getCarById,
      params: { id },
    },
  ]);

  const [activeImage, setActiveImage] = useState("");

  if (loading) return <Loader />;

  const { images, description, brand, price, year, generation } = car[0];
  const parsedImages = JSON.parse(images);

  if (!activeImage && parsedImages.length > 0) {
    setActiveImage(parsedImages[0]);
  }

  const mappedCar = {
    images: parsedImages,
    title: car[0].title,
    carInfo: JSON.parse(car[0].carinfo),
    characteristics: JSON.parse(car[0].Characteristics),
    brand,
    price,
    year,
    generation,
  };

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <Carousel
          images={parsedImages}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
        />
        <div className="hstack gap-3 overflow-x-auto">
          {parsedImages.map(renderImageList(activeImage, setActiveImage))}
        </div>
      </div>
      <div className="col-md-6">
        {renderTitle(mappedCar.title)}
        <Price price={price} />
        <p className="mb-3">{description}</p>
        <h2>Car info</h2>
        <div className="row">{renderCarInfo(mappedCar.carInfo)}</div>
      </div>
      <h2>Характеристики</h2>
      {renderCharacteristics(mappedCar.characteristics)}
    </div>
  );
}

export default CarView;
