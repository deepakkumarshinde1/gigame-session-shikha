import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CallAnAPI from "./CallAnAPI.jsx";

createRoot(document.querySelector("#root")).render(
  <Fragment>
    <App />
  </Fragment>
);

// JSX => Javascript XML
