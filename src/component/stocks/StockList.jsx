import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { IoMdRefresh } from "react-icons/io";
import { LiaArrowsAltVSolid } from "react-icons/lia";
const StockList = () => {
  return (
    <table className="filter_stock_list_container">
      <thead>
        <tr>
          <th>
            <button>
              <span>검색된 주식</span>・<span>100개</span>
              <IoMdRefresh />
            </button>
          </th>
          <th>
            <div>
              <span>현재가</span>
            </div>
          </th>
          <th>
            <div>
              <span>등락률</span>
            </div>
          </th>
          <th>
            <div>
              <span>카테고리</span>
            </div>
          </th>
          <th>
            <div>
              <button>
                <span>시가총액</span>
                <LiaArrowsAltVSolid />
              </button>
            </div>
          </th>
          <th>
            <div>
              <button>
                <span>거래량</span>
                <LiaArrowsAltVSolid />
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
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
        <tr onClick={() => goDetail(2)}>
          <td>
            <div className="stock_info_container">
              <button className="like_btn_img_box">
                <FaHeart />
              </button>
              <span className="number">2</span>
              <div className="info">
                <FaBuildingUser />
                <span>몬테 로사 테라퓨틱스</span>
              </div>
            </div>
          </td>
          <td>
            <div>
              <span>333,383원</span>
            </div>
          </td>
          <td>
            <div className="fluctuating_value_rate up">
              <span>+8.7%</span>
              <span>+300원</span>
            </div>
          </td>
          <td>
            <div>
              <span>바이오 신약</span>
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
      </tbody>
    </table>
  );
};

export default StockList;
