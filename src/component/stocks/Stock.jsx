import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { upDownNumber } from "@/util/numberUtil";

const Stock = ({ stockInfo, index }) => {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/stock/${id}/price`);
  };
  return (
    <tr onClick={() => goDetail(stockInfo.code)}>
      <td>
        <div className="stock_info_container">
          <button className="like_btn_img_box">
            <FaHeart />
          </button>
          <span className="number">{index + 1}</span>
          <div className="info">
            <FaBuildingUser />
            <span>{stockInfo.name}</span>
          </div>
        </div>
      </td>
      <td>
        <div>
          <span>{stockInfo.price}원</span>
        </div>
      </td>
      <td>
        <div
          className={`fluctuating_value_rate ${upDownNumber(
            stockInfo.chgRate
          )}`}
        >
          <span>{stockInfo.chgRate}%</span>
          <span>-8300원</span>
        </div>
      </td>
      <td>
        <div>
          <span>스마트폰 제조</span>
        </div>
      </td>
      <td>
        <div>
          <span>{stockInfo.data.stotPrice}억원</span>
        </div>
      </td>
      <td>
        <div>
          <span>{stockInfo.data.acmlVol}주</span>
        </div>
      </td>
    </tr>
  );
};

export default Stock;
