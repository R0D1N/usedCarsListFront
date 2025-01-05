import React from "react";
import { Outlet } from "react-router-dom";

function EmptyLayout() {
  return (
    <div className="container h-100">
      <Outlet />
    </div>
  );
}

export default EmptyLayout;
