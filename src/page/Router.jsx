import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import StocksPage from "./stock/StocksPage";
import {
  StockPricePage,
  StockInfoPage,
  StockCommunityPage,
  StockAiPage,
} from "./stock_detail/StockDetail";
import { AssetsPage } from "./my_account/MyAccount";
import Error404Page from "./Error404/Error404Page";
import Layout from "@/layout/Layout";
import StockDetailLayout from "@/layout/StockDetailLayout";
import MyAccountLayout from "@/layout/MyAccountLayout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          {/* /stocks */}
          <Route path="/stocks" element={<StocksPage />}></Route>
          {/* /my_account */}
          <Route path="/my_account" element={<MyAccountLayout />}>
            <Route index element={<AssetsPage />}></Route>
            <Route path="assets" element={<AssetsPage />}></Route>
          </Route>
        </Route>

        {/* /stock/:stockId */}
        <Route path="/stock/:stockId" element={<StockDetailLayout />}>
          <Route index element={<StockPricePage />}></Route>
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
