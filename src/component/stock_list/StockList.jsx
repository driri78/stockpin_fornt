import React from "react";
import { FaPlusCircle, FaHeart } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import "../../assets/css/stock/stock_list.css";
import KoreaFlag from "../../assets/images/korea_flag.svg";
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
      </aside>
      <main>
        <div className="filter_title_container">
          <h3>연속 상승세</h3>
          <p>일주일 연속 상승세를 보이는 주식</p>
        </div>
        <nav className="filter_list_container">
          <ul>
            <li>
              <button>
                <div className="filter_icon_box">
                  <IoFilter />
                </div>
                <span>필터 추가</span>
              </button>
              <div></div>
            </li>
            <li>
              <button>
                <div className="flag_img_box">
                  <KoreaFlag />
                </div>
                <span>국내</span>
                <div className="arrow_down_img_box">
                  <MdKeyboardArrowDown />
                </div>
              </button>
              <div></div>
            </li>
            <li>
              <button>
                <span>카테고리</span>
                <div className="arrow_down_img_box">
                  <MdKeyboardArrowDown />
                </div>
              </button>
            </li>
            <li>
              <button>
                <span>시가총액</span>
                <div className="arrow_down_img_box">
                  <MdKeyboardArrowDown />
                </div>
              </button>
            </li>
            <li>
              <button>
                <span>거래량</span>
                <div className="arrow_down_img_box">
                  <MdKeyboardArrowDown />
                </div>
              </button>
            </li>
            <li>
              <button>
                <span>주가 등락률</span>
                <div className="arrow_down_img_box">
                  <MdKeyboardArrowDown />
                </div>
              </button>
            </li>
          </ul>
        </nav>
        <table className="filter_stock_list_container">
          <thead>
            <tr>
              <th>
                <div>
                  <span>검색된 주식</span>・<span>100개</span>
                  <IoMdRefresh />
                </div>
              </th>
              <th>
                <div>
                  <span>현재가</span>
                </div>
              </th>
              <th>
                <div>
                  <span>등락률</span>
                </div>
              </th>
              <th>
                <div>
                  <span>카테고리</span>
                </div>
              </th>
              <th>
                <div>
                  <span>시가총액</span>
                </div>
              </th>
              <th>
                <div>
                  <span>거래량</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <FaHeart />
                  <span>1</span>
                  <div>
                    <FaBuildingUser />
                    <span>애플</span>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <span>333,383원</span>
                </div>
              </td>
              <td>
                <div className="down">
                  <span>-2.5%</span>
                  <span>-8300원</span>
                </div>
              </td>
              <td>
                <div>
                  <span>스마트폰 제조</span>
                </div>
              </td>
              <td>
                <div>
                  <span>5,086.7조원</span>
                </div>
              </td>
              <td>
                <div>
                  <span>101,075,128주</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default StockList;
