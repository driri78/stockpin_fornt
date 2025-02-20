import React, { useEffect } from "react";
import "@assets/css/home/section02/StockIndex.css";

const StockIndex = () => {
  return (
    <div className="stock_index_container">
      <ul>
        <li className="active">
          <h2>인기 테마</h2>
        </li>
        <li>
          <h2>인기 업종</h2>
        </li>
      </ul>
      <div className="content">
        <div className="item">
          <div id="chart"></div>
          <div className="info">
            <h3>코스피</h3>
            <div className="value down">
              <span>2,536.80</span>
              <span>-21.31</span>
              <span>(0.8%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockIndex;
