import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
