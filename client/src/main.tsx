import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const root = document.getElementById("root") !;

ReactDOM.createRoot(root).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);