import React from "react";
import "@assets/css/stock_detail/community/stockCommunity.css";
import StockUserComment from "./StockUserComment";
import { FaUserCircle } from "react-icons/fa";
import SortIcon from "@assets/images/sort_icon.svg";
const StockCommunity = () => {
  return (
    <div className="stock_community_wrap">
      <div className="stock_community_container">
        <div className="content">
          <h3>삼성전자 커뮤니티</h3>
          <div className="user_comment_container">
            <div className="user_profile_box">
              <FaUserCircle />
            </div>
            <div className="user_comment_box">
              <textarea
                name=""
                id=""
                placeholder="***님의 의견을 남겨주세요"
              ></textarea>
              <div className="user_comment_btn_box">
                <button>등록</button>
              </div>
            </div>
          </div>
          <div>
            <div className="sort_btn_box">
              <button>
                <span>인기순</span>
                <SortIcon />
              </button>
            </div>
            <div>
              <StockUserComment />
              <div className="replay">
                <StockUserComment />
              </div>
            </div>
          </div>
        </div>
        <div className="ranking">
          <h4>인기 급상승 커뮤니티</h4>
          <ul>
            <li>
              <div>
                <span></span>
                <div></div>
                <div>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                  <span></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StockCommunity;
