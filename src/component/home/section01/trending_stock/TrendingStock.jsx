import React, { useEffect, useState } from "react";
import "@assets/css/home/section01/trendingStock.css";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import StockListItem from "./StockListItem";
import Paging from "./Paging";

const Search = () => {
  const [data, setData] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const getValumTopData = async () => {
      const apiUrl = import.meta.env.VITE_PRICE_API_URL;
      axios
        .get(`${apiUrl}/volume/top`)
        .then((response) => {
          setData(response.data);
          setCurrentPage(1);
        })
        .catch((error) => {
          console.error("에러 발생:", error);
        });
    };
    getValumTopData();
  }, []);

  useEffect(() => {
    setStockList(data.slice((currentPage - 1) * 10, currentPage * 10));
  }, [currentPage]);

  if (data === null) return <div>로딩중...</div>;
  return (
    <div className="search_container">
      <div className="content">
        <div className="title">
          <h2>실시간 차트</h2>
          <span>10:25</span>
        </div>
        <div className="explanation">
          <BsFillExclamationCircleFill />
          <p>실시간 가장 많이 검색하고 있는 주식 순서</p>
        </div>
        <ul className="rank">
          <li>
            <span className="stocks">종목</span>
            <span className="value">현재가</span>
            <span className="fluctuating_value_rate">등락률</span>
            <span className="trading_volume">거래량</span>
          </li>
          {stockList.map((stock, index) => (
            <StockListItem
              key={stock.code}
              stock={stock}
              index={index}
              currentPage={currentPage}
            />
          ))}
        </ul>
      </div>
      <Paging
        first={1}
        last={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Search;
