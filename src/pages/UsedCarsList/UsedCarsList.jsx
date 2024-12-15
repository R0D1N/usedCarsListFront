import React from "react";
import { useSearchParams } from "react-router-dom";
import mockedList from "../mockedList.js";
import Filter from "./Filter/Filter.jsx";
import CarCard from "./Card/CarCard.jsx";
import { filterList } from "../../helpers/filter-functions.js";

function UsedCarsList() {
  const [searchParams] = useSearchParams();
  const filteredArray = filterList(mockedList, searchParams);

  return (
    <div className="row g-4">
      <div className="col-12 col-md-12 col-lg-3">
        <Filter cars={mockedList} />
      </div>
      <div className="col-12 col-md-12 col-lg-9">
        {filteredArray.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export default UsedCarsList;
