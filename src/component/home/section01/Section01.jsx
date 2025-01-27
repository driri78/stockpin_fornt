import React from "react";
import "../../../assets/css/home/section01/section01.css";
import Search from "./search/Search";
import TrendingBoard from "./trending_board/TrendingBoard";
import News from "./news/News";

const Section01 = () => {
  return (
    <section className="section01">
      <Search />
      <TrendingBoard />
      <News />
    </section>
  );
};

export default Section01;
