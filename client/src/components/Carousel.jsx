import React from "react";

const renderCarouselImage = (activeImage) =>
  function (imageSrc, index) {
    return (
      <div
        key={imageSrc + index}
        className={`ratio ratio-16x9 carousel-item ${activeImage === imageSrc ? "active" : ""}`}
      >
        <img
          src={imageSrc}
          className="d-block w-100 object-fit-cover"
          alt="Car image"
        />
      </div>
    );
  };

function Carousel({ images, activeImage, setActiveImage }) {
  const imageIndex = () => images.findIndex((image) => image === activeImage);

  const handleControlClick = (direction) => () => {
    const nextImageIndex = imageIndex() + direction;
    setActiveImage(images[nextImageIndex]);
  };

  return (
    <div id="carouselExample" className="carousel slide mb-3">
      <div className="carousel-inner">
        {images.map(renderCarouselImage(activeImage))}
      </div>
      {imageIndex() !== 0 && (
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={handleControlClick(-1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
      )}
      {imageIndex() !== images.length - 1 && (
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={handleControlClick(1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      )}
    </div>
  );
}

export default Carousel;
