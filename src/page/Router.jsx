import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import ChartListPage from "./chart/ChartListPage";
import ChartStockTitle from "./chart/ChartStockTitle";
import Error404Page from "./Error404/Error404Page";
import Layout from "../layout/Layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/err404" element={<Error404Page />}></Route>
        <Route path="/chart" element={<Navigate to="/err404" />}></Route>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/chart" element={<Error404Page />}></Route>
          <Route path="/chart" element={<ChartStockTitle />}>
            <Route path="list" element={<ChartListPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
