import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Stock = () => {
  const navigate = useNavigate();
  const goDetail = (id) => {
    navigate(`/stock/${id}/price`);
  };
  return (
    <tr onClick={() => goDetail(1)}>
      <td>
        <div className="stock_info_container">
          <button className="like_btn_img_box">
            <FaHeart />
          </button>
          <span className="number">1</span>
          <div className="info">
            <FaBuildingUser />
            <span>애플</span>
          </div>
        </div>
      </td>
      <td>
        <div>
          <span>333,383원</span>
        </div>
      </td>
      <td>
        <div className="fluctuating_value_rate down">
          <span>-2.5%</span>
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
          <span>5,086.7조원</span>
        </div>
      </td>
      <td>
        <div>
          <span>101,075,128주</span>
        </div>
      </td>
    </tr>
  );
};

export default Stock;
