import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { apiMethods } from "../../api/apiMethods.js";
import Loader from "../../components/Loader/Loader.jsx";
import Pagination from "../../components/Pagination.jsx";
import {
  brandListMapper,
  carsListMapper,
} from "../../helpers/cars-functions.js";
import useFetchData from "../../hooks/useFecthData.js";
import CarCard from "./Card/CarCard.jsx";
import Filter from "./Filter/Filter.jsx";
import {
  scrollToElement,
  searchParamsObject,
} from "../../helpers/functions.js";

function CarList() {
  const isFirstRender = useRef(true);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const filterRef = useRef(null);

  const { carsList, getBrandList, loading, refetch } = useFetchData([
    {
      name: "carsList",
      method: apiMethods.getCarsList,
      query: { page, ...searchParamsObject(searchParams) },
    },
    {
      name: "getBrandList",
      method: apiMethods.getBrandList,
    },
  ]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToElement(filterRef);
    refetch([
      {
        name: "carsList",
        method: apiMethods.getCarsList,
        query: { page, ...searchParamsObject(searchParams) },
      },
    ]);
  }, [page, searchParams]);

  const mappedList = carsList?.results.map(carsListMapper) || [];
  const mappedBrands = getBrandList?.results.map(brandListMapper) || [];

  return (
    <div className="row g-4">
      <div ref={filterRef} className="col-12 col-md-12 col-lg-3">
        <Filter brands={mappedBrands} />
      </div>
      <div className="col-12 col-md-12 col-lg-9">
        {loading ? (
          <Loader />
        ) : (
          <>
            <p>Результатов: {carsList?.totalItems}</p>
            {mappedList.map((car) => (
              <CarCard key={car.record} {...car} />
            ))}
            <Pagination
              currentPage={page}
              totalPages={carsList?.totalPages}
              searchParams={searchParams}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CarList;
