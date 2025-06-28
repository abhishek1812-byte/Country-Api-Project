import React from "react";
import App from "./App.js";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx"; // ✅ Import Error component
import CountryDetail from "./components/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, // ✅ Fix: Ensure Error component is imported
    children: [ // ✅ Fix: Use lowercase `children`
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
