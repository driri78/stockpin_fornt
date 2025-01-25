import React from "react";
import "../../../../assets/css/home/section01/search.css";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search_container">
      <div className="input_box">
        <label htmlFor="" className="img_box">
          <IoSearch style={{ width: "1.25rem", height: "1.25rem" }} />
        </label>
        <input type="text" placeholder="검색어를 입력하세요" />
      </div>
      <div className="content">
        <ul className="rank">
          <li>
            <div className="number">1</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">+73%</div>
          </li>
          <li>
            <div className="number">2</div>
            <img src="" alt="" />
            <div className="name">현대차</div>
            <div className="value_rate">-2.6%</div>
          </li>
          <li>
            <div className="number">3</div>
            <img src="" alt="" />
            <div className="name">쏠리드</div>
            <div className="value_rate">+11%</div>
          </li>
          <li>
            <div className="number">4</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">+27%</div>
          </li>
          <li>
            <div className="number">5</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">+0.4%</div>
          </li>
          <li>
            <div className="number">6</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">-11%</div>
          </li>
          <li>
            <div className="number">7</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">+45%</div>
          </li>
          <li>
            <div className="number">8</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">-1.2%</div>
          </li>
          <li>
            <div className="number">9</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">+3.3%</div>
          </li>
          <li>
            <div className="number">10</div>
            <img src="" alt="" />
            <div className="name">아스테라시스</div>
            <div className="value_rate">+8%</div>
          </li>
        </ul>
        <div className="chart">실시간 검색어 주식 차트</div>
      </div>
    </div>
  );
};

export default Search;
