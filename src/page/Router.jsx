import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import StocksPage from "./stock/StocksPage";
import {
  StockPricePage,
  StockInfoPage,
  StockCommunityPage,
  StockAiPage,
} from "./stock_detail/Stock";
import Error404Page from "./Error404/Error404Page";
import Layout from "@/layout/Layout";
import StockDetailLayout from "@/layout/StockDetailLayout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          {/* /stocks */}
          <Route path="/stocks" element={<StocksPage />}></Route>
        </Route>
        {/* /stock/:stockId */}
        <Route path="/stock/:stockId" element={<StockDetailLayout />}>
          <Route index element={<Navigate to="/err404" />}></Route>
          <Route path="price" element={<StockPricePage />}></Route>
          <Route path="info" element={<StockInfoPage />}></Route>
          <Route path="community" element={<StockCommunityPage />}></Route>
          <Route path="ai" element={<StockAiPage />}></Route>
        </Route>

        {/* 잘못된 경로 */}
        <Route path="*" element={<Navigate to="/err404" />} />
        <Route path="/err404" element={<Error404Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
