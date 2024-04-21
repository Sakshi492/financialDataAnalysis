import React from "react";
import { render } from "react-dom";
import App from "./src/App.js";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
