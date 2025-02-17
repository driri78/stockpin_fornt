import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import "@assets/css/stock_detail/community/stockUserComment.css";
const StockUserComment = () => {
  return (
    <div className="comment_contianer">
      <div className="comment_user_profile_box">
        <div className="img_box">
          <img
            src="https://resources-fe.toss.im/image-optimize/width=96,quality=75/https%3A%2F%2Fstatic.toss.im%2Fillusts%2Fimg-profile-emoji-02.png"
            style={{ color: "transparent" }}
          />
        </div>
        <span>주주</span>
      </div>
      <div className="content">
        <div className="user_info">
          <span className="name">왕토끼</span>・<span>8시간전</span>
        </div>
        <p>
          신데렐라 2시간 전 개미들 이제 털기 시작하네... 어떻게 개미들은
          한결같냐...;;
        </p>
        <ul>
          <li>
            <div className="item">
              <FaHeart />
              <span>6</span>
            </div>
          </li>
          <li>
            <div className="item">
              <FaComment />
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StockUserComment;
