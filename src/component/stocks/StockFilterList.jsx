import React from "react";

const StocksFilterList = () => {
  return (
    <div className="stockPin_create_filter_box">
      <h3>StockPin 추천 필터</h3>
      <ul>
        <li>
          <h4 className="active">연속 상승세</h4>
          <div className="hover_content_box">
            <div>
              <span>연속 상승세</span>
              <p>일주일 연속 상승세를 보이는 주식</p>
            </div>
          </div>
        </li>
        <li>
          <h4>꾸준한 배당주</h4>
          <div className="hover_content_box">
            <div>
              <span>꾸준한 배당주</span>
              <p>배당을 꾸준히 하는 주식</p>
            </div>
          </div>
        </li>
        <li>
          <h4>돈 잘 버는 회사</h4>
          <div className="hover_content_box">
            <div>
              <span>돈 잘 버는 회사</span>
              <p>매출과 이익을 크게 내는 회사</p>
            </div>
          </div>
        </li>
        <li>
          <h4>안정 성장주</h4>
          <div className="hover_content_box">
            <div>
              <span>안정 성장주</span>
              <p>꾸준하게 이익이 늘고 있는 회사</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StocksFilterList;
