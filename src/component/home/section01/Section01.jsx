import React from "react";
import Search from "./search/Search";
import Login from "./login/Login";
import TrendingBoard from "./trending_board/TrendingBoard";
import "../../../assets/css/home/section01/section01.css";

const Section01 = () => {
  return (
    <section className="section01">
      <Search />
      <Login />
      <TrendingBoard />
    </section>
  );
};

export default Section01;
