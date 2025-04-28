import React, { useState } from "react";
import "@assets/css/home/section01/trendingStock.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";
import StockListItem from "./StockListItem";

const Search = () => {
  const tmp = [
    {
      name: "삼성전자",
      value: 70200,
      rate: 1.5,
      volume: 1200000,
    },
    {
      name: "LG에너지솔루션",
      value: 420000,
      rate: -0.8,
      volume: 800000,
    },
    {
      name: "카카오",
      value: 58000,
      rate: 0.3,
      volume: 560000,
    },
    {
      name: "현대차",
      value: 190000,
      rate: 2.1,
      volume: 430000,
    },
    {
      name: "네이버",
      value: 150000,
      rate: -1.2,
      volume: 670000,
    },
    {
      name: "SK하이닉스",
      value: 112000,
      rate: 1.8,
      volume: 970000,
    },
    {
      name: "POSCO홀딩스",
      value: 310000,
      rate: 0.5,
      volume: 390000,
    },
    {
      name: "셀트리온",
      value: 176000,
      rate: -2.3,
      volume: 450000,
    },
    {
      name: "한화에어로스페이스",
      value: 124000,
      rate: 0.9,
      volume: 380000,
    },
    {
      name: "두산에너빌리티",
      value: 21000,
      rate: 3.0,
      volume: 720000,
    },
  ];
  axios
    .get("")
    .then((response) => {
      console.log(response.data);
      tmp = response.data;
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });

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
          {tmp.map((stock, index) => (
            <StockListItem key={stock.name} stock={stock} index={index} />
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
