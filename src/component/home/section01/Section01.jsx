import React from "react";
import "@assets/css/home/section01/section01.css";
import Search from "./search/Search";
import TrendingCommunity from "./trending_community/TrendingCommunity";
import News from "./news/News";

const Section01 = () => {
  return (
    <section className="section01">
      <Search />
      <TrendingCommunity />
      <News />
    </section>
  );
};

export default Section01;
