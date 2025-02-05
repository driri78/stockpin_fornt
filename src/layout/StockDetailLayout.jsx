<<<<<<< HEAD
import Header from "@/component/header/Header";
import StockTransaction from "@/component/stock_detail/StockTransaction";
import StockDetailTitle from "@component/stock_detail/StockDetailTitle";
import "@assets/css/layout/stock_detail_layout.css";
=======
import StockTransaction from "@/component/stock_detail/StockTransaction";
import StockDetailTitle from "@component/stock_detail/StockDetailTitle";
>>>>>>> d1e65804657ad71cfe85e53a9f607d6e922be652
import React from "react";
import { Outlet } from "react-router-dom";

const StockDetailLayout = () => {
  return (
<<<<<<< HEAD
    <>
      <Header />
      <StockDetailTitle />
      <section>
        <div className="stock_content_container">
=======
    <div>
      <StockDetailTitle />
      <section>
        <div>
>>>>>>> d1e65804657ad71cfe85e53a9f607d6e922be652
          <Outlet />
          <StockTransaction />
        </div>
      </section>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> d1e65804657ad71cfe85e53a9f607d6e922be652
  );
};

export default StockDetailLayout;
