import React from "react";

const TradingHistory = () => {
  return (
    <div>
      <h2>거래 내역</h2>
      <div>
        <div>
          <ul>
            <li>원화</li>
            <li>달러</li>
          </ul>
          <div>
            <div>
              <p>
                주문 가능 원화 <span>292원</span>
              </p>
              <div>
                <div>
                  <div>날짜별 예상 현금</div>
                  <div>
                    <span>292원</span>
                    <img src="" alt="bottom_arrow" />
                  </div>
                </div>
                <div>
                  <div>
                    <span>오늘</span>
                    <span>292원</span>
                  </div>
                  <div>
                    <div>
                      <span>1일후</span>
                      <span>2월 26일 보유 현금</span>
                    </div>
                    <span>292원</span>
                  </div>
                  <div>
                    <div>
                      <span>2일후</span>
                      <span>2월 27일 보유 현금</span>
                    </div>
                    <span>292원</span>
                  </div>
                </div>
              </div>
              <div>
                <ul>
                  <li>전체</li>
                  <li>거래</li>
                  <li>환전</li>
                  <li>입출금</li>
                  <li>입출고</li>
                </ul>
                <div>
                  <div>
                    <span>2:24</span>
                    <div>
                      <span>삼성전자1주</span>
                      <span>00:28 | 구매</span>
                    </div>
                    <div>
                      <span>-58,708원</span>
                      <span>292원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>삼성전자</span>
              <span>-58,708원</span>
            </div>
            <img src="" alt="stock_icon" />
          </div>
          <div>
            <div>
              <span>거래유형</span>
              <span>주식구매</span>
            </div>
            <div>
              <span>구매일</span>
              <span>2025년 2월 20일</span>
            </div>
            <div>
              <span>총 구매수량</span>
              <span>1주</span>
            </div>
            <div>
              <span>총 구매금액</span>
              <span>58,700원</span>
            </div>
            <div>
              <span>수수료</span>
              <span>8원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingHistory;
