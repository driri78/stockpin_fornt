import React from "react";
import "@assets/css/home/section01/section01.css";
import TrendingStock from "./trending_stock/TrendingStock";
import TrendingCommunity from "./trending_community/TrendingCommunity";
import News from "./news/News";

const Section01 = () => {
  return (
    <section className="section01">
      <TrendingStock />
      <TrendingCommunity />
      <News />
    </section>
  );
};

export default Section01;
