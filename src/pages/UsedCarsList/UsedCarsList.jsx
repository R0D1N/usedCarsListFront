import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { apiMethods } from "../../api/apiMethods.js";
import Loader from "../../components/Loader/Loader.jsx";
import Pagination from "../../components/Pagination.jsx";
import { carsListMapper } from "../../helpers/cars-functions.js";
import useFetchData from "../../hooks/useFecthData.js";
import CarCard from "./Card/CarCard.jsx";
import Filter from "./Filter/Filter.jsx";

const scrollToNav = (element) => {
  element.current.scrollIntoView({ behavior: "smooth" });
};

const searchParamsObject = (params) => {
  return params.entries().reduce((acc, current) => {
    return { ...acc, [current[0]]: current[1] };
  }, {});
};

function UsedCarsList() {
  const isFirstRender = useRef(true);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const navRef = useRef(null);

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
    scrollToNav(navRef);
    refetch([
      {
        name: "carsList",
        method: apiMethods.getCarsList,
        query: { page, ...searchParamsObject(searchParams) },
      },
    ]);
  }, [page, searchParams]);

  const mappedList = carsList?.results.map(carsListMapper) || [];
  const mappedBrands = getBrandList?.results.map(
    ({ brand, brand_id: brandId }) => {
      return {
        title: brand,
        value: brandId,
      };
    },
  );

  return (
    <div className="row g-4">
      <div ref={navRef} className="col-12 col-md-12 col-lg-3">
        <Filter brands={mappedBrands} />
      </div>

      <div className="col-12 col-md-12 col-lg-9">
        <p>Результатов: {carsList?.totalItems}</p>
        {loading ? (
          <Loader />
        ) : (
          mappedList.map((car) => <CarCard key={car.record} {...car} />)
        )}
        <Pagination
          currentPage={page}
          totalPages={carsList?.totalPages}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}

export default UsedCarsList;
