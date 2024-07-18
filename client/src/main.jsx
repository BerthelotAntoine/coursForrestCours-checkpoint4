import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import ConnexionPage from "./pages/ConnexionPage";
import LandingPage from "./pages/LandingPage";
import LogoutPage from "./pages/LogoutPage";
import Kilometer10Page from "./pages/Kilometer10Page";
import MapPage from "./pages/MapPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/connexion",
        element: <ConnexionPage />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/logout",
        element: <LogoutPage />,
      },
      {
        path: "/kilometer10",
        element: <Kilometer10Page />,
      },
      {
        path: "/map",
        element: <MapPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
