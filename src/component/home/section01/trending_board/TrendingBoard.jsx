import React from "react";
import "../../../../assets/css/home/section01/trendingBoard.css";
import { FaFireAlt } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";

const TrendingBoard = () => {
  return (
    <div className="trending_board_container">
      <h2 className="title">
        <div className="img_box">
          <FaFireAlt />
        </div>
        <span>뜨고 있는 커뮤니티</span>
      </h2>
      <div className="content">
        <div className="company_info_container">
          <div className="item active">
            <div className="info">
              <FaBuildingUser style={{ width: "1.5rem", height: "1.5rem" }} />
              <span>신젠</span>
            </div>
            <span className="down">-2.2%</span>
          </div>
          <div className="item">
            <div className="info">
              <FaBuildingUser style={{ width: "1.5rem", height: "1.5rem" }} />
              <span>삼성전자</span>
            </div>
            <span className="up">+8.8%</span>
          </div>
        </div>
        <div className="reply_container">
          <div className="item">
            <div className="user_info">
              <FaCircleUser style={{ width: "1.5rem", height: "1.5rem" }} />
              <p>대주주・1월 22일</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur minima quis assumenda deserunt officiis,
            </p>
          </div>
          <div className="item">
            <div className="user_info">
              <FaCircleUser style={{ width: "1.5rem", height: "1.5rem" }} />
              <p>대주주・1월 22일</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur minima quis assumenda deserunt officiis,
            </p>
          </div>
        </div>
      </div>
      <div className="comunity_go_container">
        <a href="#">신젠 커뮤니티 바로가기</a>
      </div>
    </div>
  );
};

export default TrendingBoard;
