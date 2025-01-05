import React from "react";

export function LoaderIcon() {
  return (
    <i
      className="fa-solid fa-circle-notch fa-3x fa-spin"
      style={{ animationDuration: "0.75s" }}
      role="status"
    />
  );
}

function Loader() {
  return (
    <div className="vstack w-100 vh-100 justify-content-center align-items-center top-0 start-0 position-fixed">
      <LoaderIcon />
    </div>
  );
}

export default Loader;
