import React from "react";
import ApexCharts from "apexcharts";
import axios from "axios";
import "../../../../assets/css/home/section01/StockIndex.css";
const StockIndex = () => {
  axios
    .get("https://openapivts.koreainvestment.com:29443")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div className="stock_index_container">
      <ul>
        <li className="active">지수 · 환율</li>
        <li>원자재</li>
      </ul>
      <div>
        <div id="chart"></div>
      </div>
    </div>
  );
};

export default StockIndex;
