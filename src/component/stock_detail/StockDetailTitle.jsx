import React from "react";
import { FaBuildingUser } from "react-icons/fa6";
import "@assets/css/stock_detail/stockDetailTitle.css";
import { Link, useParams } from "react-router-dom";
const StockDetailTitle = () => {
  const { stockId } = useParams();

  return (
    <div>
      <div className="stock_detail_title_container">
        <div className="icon_box">
          <FaBuildingUser />
        </div>
        <div className="info">
          <div className="name">
            <span>애플</span>
            <span>AAPL</span>
          </div>
          <div className="value">
            <span className="krw">332,979원</span>
            <div className="sub_box">
              <span className="usd">$226.80</span>
              <div className="fluctuating_value_rate up">
                <span>+1,895원</span>
                <span>(0.5%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="stock_menu_contianer">
        <li className="active">
          <Link to={`/stock/${stockId}/price`}>차트 · 호가</Link>
        </li>
        <li>
          <Link to={`/stock/${stockId}/info`}>종목 정보</Link>
        </li>
        <li>
          <Link to={`/stock/${stockId}/community`}>커뮤니티</Link>
        </li>
        <li>
          <Link to={`/stock/${stockId}/ai`}>ai 분석</Link>
        </li>
      </ul>
    </div>
  );
};

export default StockDetailTitle;
