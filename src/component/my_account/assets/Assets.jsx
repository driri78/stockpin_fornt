import React from "react";
import { Link } from "react-router-dom";
import "@assets/css/my_account/assets/assets.css";
import {
  Won,
  Dollar,
  KoreaFlag,
  USAFlag,
  SalesRevenue,
  Dividends,
  Interest,
} from "@/assets/images/Image";

const Assets = () => {
  return (
    <div className="assets_container">
      <div>
        <div className="assets_info_container">
          <h2>토스증권 177-01-070357</h2>
          <div className="total_assets">58,592원</div>
          <span className="compare_assets">
            지난주보다<span>0원 (0%)</span>
          </span>
        </div>
        <div className="assets_chart_container">
          <div className="chart_box">차트</div>
          <ul>
            <li className="active">1주</li>
            <li>1달</li>
            <li>3달</li>
            <li>1년</li>
          </ul>
        </div>
      </div>
      <div className="assets_content_container remain_assets_container">
        <div className="header">
          <div className="title">
            <h3>주문 가능 금액</h3>
            <span>292원</span>
          </div>
          <div className="btn_box">
            <button>채우기</button>
            <button>보내기</button>
            <button>환전</button>
          </div>
        </div>
        <div className="investable_assets_contianer">
          <div className="investable_assets_box domestic">
            <div className="title">
              <Won />
              <span>원화</span>
            </div>
            <div className="content">
              <span className="remain_currency">292원</span>
              <span className="sub_comment">292원 출금 가능</span>
            </div>
          </div>
          <div className="investable_assets_box foreign">
            <div className="title">
              <Dollar />
              <span>달러</span>
            </div>
            <div className="content">
              <span className="remain_currency">$0.00</span>
              <span className="sub_comment">$0.00 환전 가능</span>
            </div>
          </div>
        </div>
      </div>
      <div className="assets_content_container invested_assets_container">
        <div className="header">
          <h3>투자 중인 금액</h3>
          <div>
            <span className="total_ammount">58,200원</span>
            <span className="down">(-0.6%)</span>
          </div>
        </div>

        <div className="investable_assets_contianer">
          <div className="investable_assets_box">
            <div className="title">
              <KoreaFlag />
              <span>국내주식</span>
            </div>
            <div className="content">
              <span>58,200원</span>
              <div className="sub_comment down">
                <span>-500원</span>
                <span>(-1.0%)</span>
              </div>
            </div>
          </div>
          <div className="investable_assets_box">
            <div className="title">
              <USAFlag />
              <span>해외주식</span>
            </div>
            <div className="content">
              <div>
                <span>0원</span>
                <span>$0.00</span>
              </div>
              <div className="sub_comment">
                <span>0원</span>
                <span>(0.0%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="revenue_contianer">
        <div className="header">
          <h3>2월 수익</h3>
          <span>0원</span>
        </div>
        <ul>
          <li>
            <Link to="#">
              <SalesRevenue />
              <div>
                <span>판매수익</span>ㅣ<span>0원</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Dividends />
              <div>
                <span>배당금</span>ㅣ<span>0원</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Interest />
              <div>
                <span>이자</span>ㅣ<span>0원</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Assets;
