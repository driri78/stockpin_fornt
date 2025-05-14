import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { LiaArrowsAltVSolid } from "react-icons/lia";
import Stock from "./Stock";
const StockList = ({ filterStockList }) => {
  if (filterStockList == "") return "";
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
        {filterStockList.map((stock) => (
          <Stock key={stock.code} />
        ))}
      </tbody>
    </table>
  );
};

export default StockList;
