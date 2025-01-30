import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import {
  ChartStockTitle,
  ChartListPage,
  ChartPricePage,
  ChartInfoPage,
  ChartCommunityPage,
  ChartAiPage,
} from "./chart/Chart";
import Error404Page from "./Error404/Error404Page";
import Layout from "../layout/Layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          {/* /chart */}
          <Route path="/chart" element={<ChartListPage />}></Route>
          {/* /chart/:stockId */}
          <Route path="/chart/:stockId" element={<ChartStockTitle />}>
            <Route index element={<Navigate to="/err404" />}></Route>
            <Route path="price" element={<ChartPricePage />}></Route>
            <Route path="info" element={<ChartInfoPage />}></Route>
            <Route path="community" element={<ChartCommunityPage />}></Route>
            <Route path="ai" element={<ChartAiPage />}></Route>
          </Route>
        </Route>

        {/* 잘못된 경로 */}
        <Route path="*" element={<Navigate to="/err404" />} />
        <Route path="/err404" element={<Error404Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
