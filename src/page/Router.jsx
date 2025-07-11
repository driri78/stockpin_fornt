import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SignInPage, SignUpPage } from "./auth/auth";
import HomePage from "./home/HomePage";
import StocksPage from "./stocks/StocksPage";
import {
  StockPricePage,
  StockInfoPage,
  StockCommunityPage,
  StockAiPage,
} from "./stock_detail/StockDetail";
import { AssetsPage, TradingHistoryPage } from "./my_account/MyAccount";
import Error404Page from "./Error404/Error404Page";
import Layout from "@/layout/Layout";
import StockDetailLayout from "@/layout/StockDetailLayout";
import MyAccountLayout from "@/layout/MyAccountLayout";
import AuthLayout from "@/layout/AuthLayout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* /login */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          {/* /stocks */}
          <Route path="/stocks" element={<StocksPage />}></Route>
          {/* /my_account */}
          <Route path="/my_account" element={<MyAccountLayout />}>
            <Route index element={<AssetsPage />}></Route>
            <Route path="assets" element={<AssetsPage />}></Route>
            <Route
              path="trading_history"
              element={<TradingHistoryPage />}
            ></Route>
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
        <Route path="*" element={<Navigate to="/err404" replace="true" />} />
        <Route path="/err404" element={<Error404Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
