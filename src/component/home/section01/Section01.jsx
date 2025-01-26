import React from "react";
import "../../../assets/css/home/section01/section01.css";
import Search from "./search/Search";
import Login from "./login/Login";
import StockIndex from "./stock_index/StockIndex";

const Section01 = () => {
  return (
    <section className="section01">
      <Search />
      <Login />
      <StockIndex />
    </section>
  );
};

export default Section01;
