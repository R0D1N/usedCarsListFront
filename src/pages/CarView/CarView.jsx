import "./style.sass";
import { useParams } from "react-router-dom";
import mockedList from "../mockedList";

const findCar = (pathId) => (car) => car.id === pathId;

const CarView = () => {
  const pathId = +useParams().id;

  const { image, model, description, brand, id, price } = mockedList.find(
    findCar(pathId),
  );

  return (
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="ratio ratio-16x9 mb-3">
            <img
                src={image}
                alt="Product"
                className="img-fluid rounded  product-image"
                id="mainImage"
            />
          </div>
          <div className="hstack gap-3 overflow-x-auto">
            <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Thumbnail 1"
              className="thumbnail rounded active"
            />
            <img
              src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Thumbnail 2"
              className="thumbnail rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Thumbnail 3"
              className="thumbnail rounded"
            />
            <img
              src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Thumbnail 4"
              className="thumbnail rounded"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{model}</h2>
          <p className="text-muted mb-3">{brand}</p>
          <div className="mb-3">
            <span className="h4 me-2">${price}</span>
            <span className="text-muted">
              <s>${price + 200}</s>
            </span>
          </div>
          <p className="mb-3">
            {description}
          </p>
        </div>
      </div>
  );
};

export default CarView;
