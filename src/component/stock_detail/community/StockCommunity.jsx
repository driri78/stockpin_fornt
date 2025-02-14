import React from "react";
import StockUserComment from "./StockUserComment";

const StockCommunity = () => {
  return (
    <div>
      <div>
        <h3>삼성전자 커뮤니티</h3>
        <div>
          <div></div>
          <div>
            <textarea
              name=""
              id=""
              value={"의견을 남기려면 프로필 로그인이 필요해요"}
            ></textarea>
          </div>
        </div>
        <div>
          <div className="sort">
            <button>인기순</button>
            <button>최신순</button>
          </div>
          <div>
            <StockUserComment />
            <div className="replay">
              <StockUserComment />
            </div>
          </div>
        </div>
      </div>
      <div>
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
  );
};

export default StockCommunity;
