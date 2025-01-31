import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import {
  StockTitle,
  StockListPage,
  StockPricePage,
  StockInfoPage,
  StockCommunityPage,
  StockAiPage,
} from "./stock/Stock";
import Error404Page from "./Error404/Error404Page";
import Layout from "../layout/Layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          {/* /chart */}
          <Route path="/stocks" element={<StockListPage />}></Route>
          {/* /chart/:stockId */}
          <Route path="/stock/:stockId" element={<StockTitle />}>
            <Route index element={<Navigate to="/err404" />}></Route>
            <Route path="price" element={<StockPricePage />}></Route>
            <Route path="info" element={<StockInfoPage />}></Route>
            <Route path="community" element={<StockCommunityPage />}></Route>
            <Route path="ai" element={<StockAiPage />}></Route>
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
