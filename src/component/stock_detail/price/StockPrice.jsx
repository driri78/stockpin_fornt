import React from "react";
import "@assets/css/stock_detail/price/stockPrice.css";
import StockPriceChart from "./StockPriceChart";
const StockPrice = () => {
  return (
    <div className="stock_price_container">
      <div className="stock_price_content01">
        <div className="stock_chart_container">
          <StockPriceChart />
        </div>
        <div className="stock_going_rate_container">
          <h3>일별 · 실시간 시세</h3>
          <ul>
            <li className="active">실시간</li>
            <li>일별</li>
          </ul>
          <div className="going_rate_table_wrap">
            <table>
              <thead>
                <tr>
                  <th>체결가</th>
                  <th>체결량(주)</th>
                  <th>등락률</th>
                  <th>거래량(주)</th>
                  <th>시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
                <tr>
                  <td>339,562원</td>
                  <td className="up">1</td>
                  <td className="down">-0.15%</td>
                  <td>13,884</td>
                  <td>14:17:32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="stock_price_content02">
        {/* 호가 단위(한국)
            1 ~ 1999 : 1원
            2000 ~ 4999 : 5원
            5000 ~ 19999 : 10원
            20000 ~ 49999 : 50원
            50000 ~ 199999 : 100원
            200000 ~ 499999 : 500원
            50000 ~ : 1000원
            10개
            상한가 하한가 : 전날기준 +-30%
        */}
        <div className="stock_quote_container">
          <div className="header">
            <h3>호가</h3>
            <div>
              <span></span>
            </div>
          </div>
          <div className="content_wrap">
            <div className="content">
              <div className="rise price_container">
                <ul>
                  <li>
                    <div className="price_info_contianer">
                      <div className="transaction_price_box">
                        <span className="down">114</span>
                        <div
                          className="progress_bar"
                          style={{ width: "12px" }}
                        ></div>
                      </div>
                      <div className="fluctuation_rate_box down">
                        <span>337,500</span>
                        <span>-1.31%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="price_info_contianer">
                      <div className="transaction_price_box">
                        <span className="down">114</span>
                        <div
                          className="progress_bar"
                          style={{ width: "12px" }}
                        ></div>
                      </div>
                      <div className="fluctuation_rate_box down">
                        <span>337,500</span>
                        <span>-1.31%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="price_info_contianer">
                      <div className="transaction_price_box">
                        <span className="down">68</span>
                        <div
                          className="progress_bar"
                          style={{ width: "6px" }}
                        ></div>
                      </div>
                      <div className="fluctuation_rate_box down">
                        <span>337,000</span>
                        <span>-1.46%</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="price_info_contianer">
                      <div className="transaction_price_box">
                        <span className="down">58</span>
                        <div
                          className="progress_bar"
                          style={{ width: "5px" }}
                        ></div>
                      </div>
                      <div className="fluctuation_rate_box down">
                        <span>336,500</span>
                        <span>-1.60%</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="price_limit stock_price_info_container">
                  <div className="info_box">
                    <div>
                      <span>상한가</span>
                      <span>444,500</span>
                    </div>
                    <div>
                      <span>하한가</span>
                      <span>239,500</span>
                    </div>
                    <div>
                      <span>상승VI</span>
                      <span>376,000</span>
                    </div>
                    <div>
                      <span>하강VI</span>
                      <span>307,000</span>
                    </div>
                  </div>
                  <div className="info_box">
                    <div>
                      <span>시작</span>
                      <span>341,500</span>
                    </div>
                    <div>
                      <span>최고</span>
                      <span className="up">345,000</span>
                    </div>
                    <div>
                      <span>최저</span>
                      <span className="down">336,000</span>
                    </div>
                  </div>
                  <div className="info_box">
                    <div>
                      <span>거래량</span>
                      <span>119,390</span>
                    </div>
                    <div>
                      <span>어제보다</span>
                      <span>92.45%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decline price_container">
                <div className="trading_strength stock_price_info_container">
                  <div className="info_box">
                    <div className="title">
                      <span>체결강도</span>
                      <span className="up">172.33%</span>
                    </div>
                    <div>
                      <span>346,500</span>
                      <span className="up">25</span>
                    </div>
                    <div>
                      <span>346,500</span>
                      <span className="up">1</span>
                    </div>
                    <div>
                      <span>346,500</span>
                      <span className="up">1</span>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="price_info_contianer">
                      <div className="fluctuation_rate_box down active">
                        <span>337,500</span>
                        <span>-1.31%</span>
                      </div>
                      <div className="transaction_price_box">
                        <span className="up">114</span>
                        <div
                          className="progress_bar"
                          style={{ width: "12px" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="price_info_contianer">
                      <div className="fluctuation_rate_box down">
                        <span>337,000</span>
                        <span>-1.46%</span>
                      </div>
                      <div className="transaction_price_box">
                        <span className="up">68</span>
                        <div
                          className="progress_bar"
                          style={{ width: "6px" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="price_info_contianer">
                      <div className="fluctuation_rate_box down">
                        <span>336,500</span>
                        <span>-1.60%</span>
                      </div>
                      <div className="transaction_price_box">
                        <span className="up">58</span>
                        <div
                          className="progress_bar"
                          style={{ width: "5px" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="left_border"></div>
              <div className="right_border"></div>
            </div>
          </div>

          <div className="footer">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StockPrice;
