import React, { useState } from "react";
import "@assets/css/home/section01/trendingStock.css";
import { FaBuildingUser, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import axios from "axios";

const Search = () => {
  axios({ method: "get", url: "http://localhost:9090/api/stock/volume/top" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
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
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">1</div>
              <div className="name">
                <FaBuildingUser />
                <span>아스테라시스</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+73%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">2</div>
              <div className="name">
                <FaBuildingUser />
                <span>현대차</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate down">-2.6%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">3</div>
              <div className="name">
                <FaBuildingUser />
                <span>쏠리드</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+11%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">4</div>
              <div className="name">
                <FaBuildingUser />
                <span>한화오션</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+27%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">5</div>
              <div className="name">
                <FaBuildingUser />
                <span>일진전기</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+0.4%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">6</div>
              <div className="name">
                <FaBuildingUser />
                <span>알테오젠</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate down">-11%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">7</div>
              <div className="name">
                <FaBuildingUser />
                <span>고영</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+45%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">8</div>
              <div className="name">
                <FaBuildingUser />
                <span>한미반도체체</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate down">-1.2%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">9</div>
              <div className="name">
                <FaBuildingUser />
                <span>클로봇</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+3.3%</div>
            <div className="trading_volume">254,023주</div>
          </li>
          <li>
            <div className="stocks">
              <div className="like_btn_img_box">
                <FaHeart />
              </div>
              <div className="number">10</div>
              <div className="name">
                <FaBuildingUser />
                <span>루미르</span>
              </div>
            </div>
            <div className="value">1576원</div>
            <div className="fluctuating_value_rate up">+8%</div>
            <div className="trading_volume">254,023주</div>
          </li>
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
