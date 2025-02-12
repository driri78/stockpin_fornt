import React, { useState } from "react";
import style from "@assets/css/stock_detail/info/stockInfo.module.css";
const StockInfo = () => {
  return (
    <div className={style.stock_info_container}>
      <nav>
        <ul>
          <li className={style.active}>주요 정보</li>
          <li>재무</li>
          <li>실적</li>
          <li>배당</li>
        </ul>
      </nav>
      <div className={style.content}>
        <div>
          <h2>삼성전자</h2>
          <span>국내・005930・코스피</span>
          <span>출처: api</span>
        </div>
        <div>
          <p>
            한국 및 DX부문 해외 9개 지역총괄과 DS부문 해외 5개 지역총괄, SDC,
            Harman 등 229개의 종속기업으로 구성된 글로벌 전자기업임.
          </p>
        </div>
        <div>
          <div>
            <span>시가총액</span>
            <span>369조 9,993억원</span>
          </div>
          <div>
            <span>실제 기업 가치</span>
            <span>322조 1,819억원</span>
          </div>
          <div>
            <span>기업명</span>
            <span>SamsungElectronics</span>
          </div>
          <div>
            <span>대표이사</span>
            <span>한종희</span>
          </div>
          <div>
            <span>상장일</span>
            <div>
              <span>1975년 6월 11일</span>
              <span>1969년 설립</span>
            </div>
          </div>
          <div>
            <span>발행주식수</span>
            <div>
              <span>1975년 6월 11일</span>
              <span>1969년 설립</span>
            </div>
          </div>
          <div>
            <span>홈페이지</span>
            <span>
              <a target="_blink" href="https://www.samsung.com/sec/">
                https://www.samsung.com/sec
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
