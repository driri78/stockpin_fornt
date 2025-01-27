import React from "react";
import "../../../assets/css/home/section02/section02.css";
import Login from "../section02/login/Login";
import StockIndex from "../section02/stock_index/StockIndex";
const Section02 = () => {
  return (
    <section className="section02">
      <Login />
      <StockIndex />
    </section>
  );
};

export default Section02;
