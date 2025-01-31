import React from "react";

const StockList = () => {
  return (
    <div>
      <aside>필터링</aside>
      <main>
        <div>
          <h3>해외 주식</h3>
          <p>해외에 포함되는 주식식</p>
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
        </table>
      </main>
    </div>
  );
};

export default StockList;
