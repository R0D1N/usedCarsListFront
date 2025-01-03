import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { removeNullishFields } from "../../../helpers/object.js";
import FILTERS_CONFIG from "./filterConfig.js";

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

function RenderSelect({ placeholder, queryParam, value, options = [] }) {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <select
      className="form-select"
      id={queryParam}
      name={queryParam}
      value={selectedValue}
      key={queryParam}
      onChange={(event) => setSelectedValue(event.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

const renderFilter = (config) => {
  return (
    <div className="mb-3" key={config.field}>
      <label className="form-label" htmlFor={config.queryParam}>
        {config.title}
      </label>
      {config.type === "select" && RenderSelect(config)}
    </div>
  );
};

function Filter({ brands }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(
    FILTERS_CONFIG({ searchParams, brands }),
  );

  useEffect(() => {
    setFilters(FILTERS_CONFIG({ searchParams, brands }));
  }, [searchParams, brands]);

  const handleClearFilter = () => setSearchParams({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const params = {};
    formData.forEach((value, key) => {
      params[key] = value;
    });

    const mappedParams = removeNullishFields(params);

    setSearchParams(mappedParams);
  };

  return (
    <div className="mb-3">
      <div>
        <div className="card card-body border-0">
          <form role="filter" onSubmit={handleFormSubmit}>
            {filters.map(renderFilter)}
            {renderActionButtons(handleClearFilter)}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
