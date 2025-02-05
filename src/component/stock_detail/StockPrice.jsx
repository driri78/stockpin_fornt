import React from "react";
import "@assets/css/stock_detail/stockPrice.css";
import StockPriceChart from "./StockPriceChart";
const StockPrice = () => {
  return (
    <div className="stock_price_container">
      <div className="stock_price_content01">
        <div className="stock_chart_container">
          <StockPriceChart />
        </div>
        <div className="stock_going_rate_container">
          <ul>
            <li>실시간</li>
            <li>일별</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>체결가</th>
                <th>체결량(주)</th>
                <th>등락률</th>
                <th>거래량(주)</th>
                <th>시간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>339,562원</td>
                <td className="up">1</td>
                <td className="down">-0.15%</td>
                <td>13,884</td>
                <td>14:17:32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="stock_price_content02">호가</div>
    </div>
  );
};
export default StockPrice;
