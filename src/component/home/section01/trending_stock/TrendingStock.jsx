import React, { useEffect, useState } from "react";
import "@assets/css/home/section01/trendingStock.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import StockListItem from "./StockListItem";

const Search = () => {
  const [data, setData] = useState(null);
  const [stockList, setStockList] = useState(null);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_PRICE_API_URL;
    axios
      .get(`${apiUrl}/volume/top`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  }, []);
  if (stockList === null) return <div>로딩중...</div>;
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
            <StockListItem key={stock.code} stock={stock} index={index} />
          ))}
        </ul>
      </div>
      <nav className="paging_container">
        <ul>
          <li className="img_box">
            <FaAngleLeft />
          </li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li className="img_box">
            <FaAngleRight />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Search;
