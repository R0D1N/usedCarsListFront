import React from "react";
import { getAllBrands, normalizeFilter } from "../../helpers/cars-functions.js";
import { useSearchParams } from "react-router-dom";

const renderSearchInputGroup = () => {
  return (
    <div>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="searchText"
      />
    </div>
  );
};

const renderBrandsFilter = (brands) => {
  return (
    <div>
      {brands.map((brand) => {
        return (
          <div className="form-check" key={brand}>
            <input
              className="form-check-input"
              type="checkbox"
              value={brand}
              id={brand}
              name="brand"
            />
            <label className="form-check-label" htmlFor={brand}>
              {brand}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const renderActionButtons = (handleClearFilter) => {
  return (
    <div className="hstack justify-content-between">
      <button
        className="btn btn-outline-secondary"
        type="reset"
        onClick={handleClearFilter}
      >
        Clear
      </button>
      <button className="btn btn-outline-success" type="submit">
        Apply
      </button>
    </div>
  );
};

const setNewValue = (pair) => (prevParams) => {
  console.log(prevParams);
  return {
    [pair[0]]: normalizeFilter(pair[1]),
  };
};

const setSearchParamsFromFormData = (formData, setSearchParams) => {
  for (const pair of formData.entries()) {
    setSearchParams(setNewValue(pair));
  }
};

const Filter = ({ cars }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const brands = getAllBrands(cars);

  const handleClearFilter = () => setSearchParams(setNewValue(["", ""]));

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setSearchParamsFromFormData(formData, setSearchParams);
  };

  return (
    <div className="mb-3">
      <button
        type="button"
        className="btn btn-outline-secondary mb-2"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Filters
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <form className="row g-3" role="filter" onSubmit={handleFormSubmit}>
            <div className="col-12">{renderSearchInputGroup()}</div>
            <div className="col-12">{renderBrandsFilter(brands)}</div>
            <div className="col-12">
              {renderActionButtons(handleClearFilter)}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
