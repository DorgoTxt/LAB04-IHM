import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const feather = require("feather-icons");
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from "./single";
import Basic from "./basic";

setTimeout(() => {
  feather.replace();
}, 1000);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
  },
  {
    path: "detalle",
    element: <Single />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

const root = createRoot(document.getElementById("root"));
root.render(

  <RouterProvider router={router} />
);