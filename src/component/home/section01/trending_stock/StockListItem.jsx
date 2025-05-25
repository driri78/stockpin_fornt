import LikeBtn from "@/component/common/like_btn/LikeBtn";
import { chgRateFomat, numberFomat } from "@/util/numberUtil";
import React from "react";
import { FaBuildingUser } from "react-icons/fa6";

const StockListItem = ({ stock, index, currentPage }) => {
  return (
    <li>
      <div className="stocks">
        <LikeBtn />
        <div className="number">{10 * (currentPage - 1) + index + 1}</div>
        <div className="name">
          <FaBuildingUser />
          <span>{stock.name}</span>
        </div>
      </div>
      <div className="value">{`${numberFomat(stock.price)}원`}</div>
      {stock.chgRate == 0 ? (
        <div className="fluctuating_value_rate">0%</div>
      ) : stock.chgRate > 0 ? (
        <div className="fluctuating_value_rate up">
          {chgRateFomat(stock.chgRate)}%
        </div>
      ) : (
        <div className="fluctuating_value_rate down">
          {chgRateFomat(stock.chgRate)}%
        </div>
      )}
      <div className="trading_volume">{numberFomat(stock.data.acmlVol)}주</div>
    </li>
  );
};

export default StockListItem;
