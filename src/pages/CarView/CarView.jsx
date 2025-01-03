import "./style.sass";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Price from "../../components/Price.jsx";
import Generation from "../../components/Generation.jsx";
import Characteristic from "../../components/Characteristic.jsx";
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

const renderTitle = (brand, model, year) => {
  return (
    <h2 className="mb-3">
      {brand} {model} {year}
    </h2>
  );
};

function CarView() {
  const [activeImage, setActiveImage] = useState("");
  const { id } = useParams();

  const { car, loading } = useFetchData([
    {
      name: "car",
      method: apiMethods.getCarById,
      params: { id },
    },
  ]);

  if (loading) return <Loader />;

  const {
    images,
    model,
    description,
    brand,
    price,
    year,
    generation,
    characteristic,
  } = car[0];
  setActiveImage(images[0]);

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <Carousel
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          x
        />
        <div className="hstack gap-3 overflow-x-auto">
          {images.map(renderImageList(activeImage, setActiveImage))}
        </div>
      </div>
      <div className="col-md-6">
        {renderTitle(brand, model, year)}
        <Generation generation={generation} />
        <Price price={price} />
        <Characteristic characteristic={characteristic} />
        <p className="mb-3">{description}</p>
      </div>
    </div>
  );
}

export default CarView;
