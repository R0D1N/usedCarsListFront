import React from "react";
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

const renderSelect = ({ placeholder, queryParam, value, options }) => {
  return (
    <select
      className="form-select"
      id={queryParam}
      name={queryParam}
      defaultValue={value || ""}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const renderFilter = (config) => {
  return (
    <div className="mb-3" key={config.queryParam}>
      <label className="form-label" htmlFor={config.queryParam}>
        {config.title}
      </label>
      {config.type === "select" && renderSelect(config)}
    </div>
  );
};

const Filter = ({ cars }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = FILTERS_CONFIG({ cars, searchParams });

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
};

export default Filter;
