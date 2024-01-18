import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoutes";
import DefaultLayout from "../Layouts/DefaultLayout";
// import PanelLayout from "../Layout/index";

const landingPage = lazy(() => import("../Pages/landingPage.js"));
const CheckOut = lazy(() => import("../Pages/CheckOut"));
const FeedBack = lazy(() => import("../Pages/FeedBack"));

function RoutesComponent() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute component={landingPage} layout={DefaultLayout} />
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute component={CheckOut} layout={DefaultLayout} />
            }
          />
          <Route
            path="/feedback"
            element={
              <PrivateRoute component={FeedBack} layout={DefaultLayout} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComponent;
