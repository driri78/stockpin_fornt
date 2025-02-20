import React from "react";
import { Link } from "react-router-dom";
import "@assets/css/my_account/assets/assets.css";
const Assets = () => {
  return (
    <div>
      <div>
        <h2>토스증권 177-01-070357</h2>
        <div>
          <span>58,592원</span>
          <span>지난주보다0원 (0%)</span>
        </div>
      </div>
      <div>
        <div>차트</div>
        <ul>
          <li>1주</li>
          <li>1달</li>
          <li>3달</li>
          <li>1년</li>
        </ul>
      </div>
      <div>
        <h3>주문 가능 금액</h3>
        <div>
          <span></span>
          <div>
            <button>채우기</button>
            <button>보내기</button>
            <button>환전</button>
          </div>
        </div>
        <div>
          <div>
            <span>원화</span>
            <div>
              <span>292원</span>
              <span>292원 출금 가능</span>
            </div>
          </div>
          <div>
            <span>달러</span>
            <div>
              <span>$0.00</span>
              <span>$0.00 환전 가능</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>투자 중인 금액</h3>
        <div>
          <span>58,200원</span>
          <span className="down">(-0.6%)</span>
        </div>
        <div>
          <div>
            <span>국내 주식</span>
            <div>
              <span>58,200원</span>
              <div className="down">
                <span>-500원</span>
                <span>(-1.0%)</span>
              </div>
            </div>
          </div>
          <div>
            <span>해외 주식</span>
            <div>
              <div>
                <span>0원</span>
                <span>$0.00</span>
              </div>
              <div>
                <span>0원</span>
                <span>(0.0%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>2월 수익</h3>
        <div>
          <span>0원</span>
        </div>
        <ul>
          <li>
            <Link to="#">
              <img src="" alt="" />
              <div>
                <span>판매수익</span>ㅣ<span>0원</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="" alt="" />
              <div>
                <span>배당금</span>ㅣ<span>0원</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="" alt="" />
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
