import StockTransaction from "@/component/stock_detail/StockTransaction";
import StockDetailTitle from "@component/stock_detail/StockDetailTitle";
import React from "react";
import { Outlet } from "react-router-dom";

const StockDetailLayout = () => {
  return (
    <div>
      <StockDetailTitle />
      <section>
        <div>
          <Outlet />
          <StockTransaction />
        </div>
      </section>
    </div>
  );
};

export default StockDetailLayout;
