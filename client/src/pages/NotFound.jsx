import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex h-100 flex-column justify-content-center align-items-center">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NotFound;
