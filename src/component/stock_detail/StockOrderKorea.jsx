import React from "react";
import "@assets/css/stock_detail/stockOrder.css";
const StockOrderKorea = () => {
  return (
    <div className="stock_order_container">
      <div className="header">
        <h3>주문하기</h3>
      </div>
      <div>
        <ul>
          <li>구매</li>
          <li>판매</li>
          <li>대기</li>
        </ul>
        <div>
          <div>
            <span>주문 유형</span>
            <div>
              <div>일반 주문</div>
              <div>
                <div>일반 주문</div>
                <div>조건 주문</div>
              </div>
            </div>
          </div>
          <div>
            <span>구매가격</span>
            <div>
              <div>
                <button>지정가</button>
              </div>
              <div>
                <button>시장가</button>
              </div>
            </div>
          </div>
          <div>
            <span>수량</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <span>미수 거래(현금 30%)</span>
          <div className="switch">
            <div></div>
          </div>
        </div>
        <div>
          <span>구매가능 금액</span>
          <span>0원</span>
        </div>
        <div>
          <span>총 주문 금액</span>
          <span>0원</span>
        </div>
        <div>
          <button>구매 예약하기</button>
        </div>
      </div>
    </div>
  );
};

export default StockOrderKorea;
