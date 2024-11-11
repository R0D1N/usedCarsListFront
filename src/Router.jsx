import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from "react-router-dom";
import UsedCarsList from "./pages/UsedCarsList.jsx";
import Layout from "./components/Layout.jsx";
import CarView from "./pages/CarView/CarView.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UsedCarsList />,
      },
      {
        path: "car/:id",
        element: <CarView />,
      },
    ],
  },
]);
