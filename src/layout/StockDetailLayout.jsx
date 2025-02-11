import Header from "@/component/header/Header";
import StockOrder from "@/component/stock_detail/StockOrder";
import StockDetailTitle from "@component/stock_detail/StockDetailTitle";
import "@assets/css/layout/stock_detail_layout.css";
import React from "react";
import { Outlet } from "react-router-dom";

const StockDetailLayout = () => {
  return (
    <>
      <Header />
      <StockDetailTitle />
      <section>
        <div className="stock_content_container">
          <Outlet />
          <StockOrder />
        </div>
      </section>
    </>
  );
};

export default StockDetailLayout;
