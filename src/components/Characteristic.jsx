import React from "react";
import { CHARACTERISTIC_TYPES } from "../helpers/constants.js";

function Characteristic({ characteristic }) {
  return (
    <div className="row g-0 mb-1">
      {CHARACTERISTIC_TYPES.map(({ name, icon }) => {
        const value = characteristic[name] || "Not specified";
        return (
          <div key={name} className="col-6 mb-1">
            <div className="d-flex align-items-center">
              <i className={`${icon} me-2 text-danger`} />
              <span className="text-muted">{value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Characteristic;
