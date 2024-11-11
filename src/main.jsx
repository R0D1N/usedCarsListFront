import React, { StrictMode } from "react";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";
// eslint-disable-next-line import/extensions
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
