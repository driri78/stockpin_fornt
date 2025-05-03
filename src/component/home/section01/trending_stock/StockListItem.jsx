import LikeBtn from "@/component/common/like_btn/LikeBtn";
import { formatNumber } from "@/util/number";
import React from "react";
import { FaBuildingUser } from "react-icons/fa6";

const StockListItem = ({ stock, index }) => {
  return (
    <li>
      <div className="stocks">
        <LikeBtn />
        <div className="number">{index + 1}</div>
        <div className="name">
          <FaBuildingUser />
          <span>{stock.name}</span>
        </div>
      </div>
      <div className="value">{`${stock.price}원`}</div>
      {stock.chgRate == 0 ? (
        <div className="fluctuating_value_rate">0%</div>
      ) : stock.chgRate > 0 ? (
        <div className="fluctuating_value_rate up">
          <span>+</span>
          {stock.chgRate}%
        </div>
      ) : (
        <div className="fluctuating_value_rate down">
          <span>-</span>
          {stock.chgRate * -1}%
        </div>
      )}
      <div className="trading_volume">{stock.data.acmlVol}주</div>
    </li>
  );
};

export default StockListItem;
