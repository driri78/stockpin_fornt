import Header from "@/component/header/Header";
import StockOrderKorea from "@/component/stock_detail/StockOrderKorea";
import StockDetailTitle from "@component/stock_detail/StockDetailTitle";
import "@assets/css/layout/stock_detail_layout.css";
import React from "react";
import { Outlet } from "react-router-dom";

const StockDetailLayout = () => {
  return (
    <div className="stock_detail_container">
      <Header />
      <StockDetailTitle />
      <section>
        <div className="stock_content_container">
          <div className="content01">
            <Outlet />
          </div>
          <StockOrderKorea />
        </div>
      </section>
    </div>
  );
};

export default StockDetailLayout;
