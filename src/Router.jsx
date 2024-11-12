import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from "react-router-dom";
import UsedCarsList from "./pages/UsedCarsList/UsedCarsList.jsx";
import Layout from "./components/Layout.jsx";
import CarView from "./pages/CarView/CarView.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import EmptyLayout from "./components/EmptyLayout.jsx";

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
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <EmptyLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
