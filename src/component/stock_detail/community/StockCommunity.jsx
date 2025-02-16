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
              <div className="item">
                <span className="number">1</span>
                <div className="content">
                  <div className="stock_img_box">
                    <img
                      src="https://thumb.tossinvest.com/image/resized/48x0/https%3A%2F%2Fstatic.toss.im%2Fpng-icons%2Fsecurities%2Ficn-sec-fill-NAS006XY7-E0.png"
                      alt=""
                    />
                  </div>
                  <div className="info_container">
                    <div className="stock_info_box">
                      <span>테슬라</span>
                      <span className="down">-0.02%</span>
                    </div>
                    <div className="community_info_box">
                      <span>글 10개</span>・<span>1분전</span>
                    </div>
                  </div>
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
