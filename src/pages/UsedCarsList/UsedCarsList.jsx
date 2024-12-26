import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { filterList } from "../../helpers/filter-functions.js";
import { carsListMapper } from "../../helpers/cars-functions.js";
import CarCard from "./Card/CarCard.jsx";
import Filter from "./Filter/Filter.jsx";
import { apiMethods } from "../../api/apiMethods.js";
import useFetchData from "../../hooks/useFecthData.js";
import Pagination from "../../components/Pagination.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const scrollToNav = (navRef) => {
  navRef.current.scrollIntoView({ behavior: "smooth" });
};

function UsedCarsList() {
  const isFirstRender = useRef(true);
  const [searchParams] = useSearchParams();
  const [placeholderVisibility, setPlaceholderVisibility] = useState(true);
  const page = Number(searchParams.get("page")) || 1;
  const navRef = useRef(null);

  const { getCarsList, loading, refetch } = useFetchData([
    {
      name: "getCarsList",
      method: apiMethods.getCarsList,
      query: { page },
    },
  ]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToNav(navRef);
    setPlaceholderVisibility(true);
    refetch([
      {
        name: "getCarsList",
        method: apiMethods.getCarsList,
        query: { page },
      },
    ]);
  }, [page]);

  useEffect(() => {
    const placeholderTime = 250;
    setTimeout(() => setPlaceholderVisibility(false), placeholderTime);
  }, [placeholderVisibility]);

  if (loading || placeholderVisibility) return <Loader />;

  const mappedList = getCarsList.results.map(carsListMapper);
  const filteredArray = filterList(mappedList, searchParams);

  return (
    <div className="row g-4">
      <div ref={navRef} className="col-12 col-md-12 col-lg-3">
        <Filter cars={mappedList} />
      </div>

      <div className="col-12 col-md-12 col-lg-9">
        <Pagination currentPage={page} totalPages={getCarsList.totalPages} />
        {filteredArray.map((car) => (
          <CarCard key={car.record} {...car} />
        ))}
        <Pagination currentPage={page} totalPages={getCarsList.totalPages} />
      </div>
    </div>
  );
}

export default UsedCarsList;
