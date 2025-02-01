import React from "react";
import { FaPlusCircle } from "react-icons/fa";

import "../../assets/css/stock/stock_list.css";

const StockList = () => {
  return (
    <div className="stock_list_container">
      <aside>
        <h2>주식 모아보기</h2>
        <div className="user_create_filter_box">
          <h3>나만의 필터</h3>
          <ul>
            <li>
              <span>내가 직접 만든 필터</span>
            </li>
            <li>
              <button>
                <div className="img_box">
                  <FaPlusCircle
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                </div>
                <span>직접 만들기</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="stockPin_create_filter_box">
          <h3>StockPin 추천 필터</h3>
          <ul>
            <li className="active">
              <h4>연속 상승세</h4>
              <div className="hover_content_box">
                <span>연속 상승세</span>
                <p>일주일 연속 상승세를 보이는 주식</p>
              </div>
            </li>
            <li>
              <h4>꾸준한 배당주</h4>
              <div className="hover_content_box">
                <span>꾸준한 배당주</span>
                <p>배당을 꾸준히 하는 주식</p>
              </div>
            </li>
            <li>
              <h4>돈 잘 버는 회사</h4>
              <div className="hover_content_box">
                <span>돈 잘 버는 회사</span>
                <p>매출과 이익을 크게 내는 회사</p>
              </div>
            </li>
            <li>
              <h4>안정 성장주</h4>
              <div className="hover_content_box">
                <span>안정 성장주</span>
                <p>꾸준하게 이익이 늘고 있는 회사</p>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <main>
        <div>
          <h3>해외 주식</h3>
          <p>해외에 포함되는 주식</p>
        </div>
        <nav>
          <ul>
            <li>필터 추가</li>
            <li>국내 해외</li>
            <li>카테고리</li>
            <li>시가총액</li>
            <li>거래량</li>
            <li>주가 등락률</li>
          </ul>
        </nav>
        <table>
          <thead>
            <tr>
              <th>
                검색된 주식・<span>100개</span>
              </th>
              <th>현재가</th>
              <th>등락률</th>
              <th>카테고리</th>
              <th>시가총액</th>
              <th>거래량</th>
              <th>주가 등락률</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </main>
    </div>
  );
};

export default StockList;
