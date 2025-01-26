import React from "react";
import { FaFireAlt } from "react-icons/fa";
import "../../../../assets/css/home/section02/trendingBoard.css";

const TrendingBoard = () => {
  return (
    <div className="trending_board_container">
      <h2 className="title">
        <div className="img_box">
          <FaFireAlt />
        </div>
        <span>hot 게시판</span>
      </h2>
      <ul>
        <li>
          <a href="#">제목1</a>
          <span>
            <a href="#">[3]</a>
          </span>
        </li>
        <li>
          <a href="#">제목2</a>
          <span>
            <a href="#">[7]</a>
          </span>
        </li>
        <li>
          <a href="#">제목3</a>
          <span>
            <a href="#">[11]</a>
          </span>
        </li>
        <li>
          <a href="#">제목4</a>
          <span>
            <a href="#">[3]</a>
          </span>
        </li>
        <li>
          <a href="#">제목5</a>
          <span>
            <a href="#">[32]</a>
          </span>
        </li>
        <li>
          <a href="#">제목6</a>
          <span>
            <a href="#">[32]</a>
          </span>
        </li>
        <li>
          <a href="#">제목7</a>
          <span>
            <a href="#">[32]</a>
          </span>
        </li>
        <li>
          <a href="#">제목8</a>
          <span>
            <a href="#">[32]</a>
          </span>
        </li>
        <li>
          <a href="#">제목9</a>
          <span>
            <a href="#">[32]</a>
          </span>
        </li>
        <li>
          <a href="#">제목10</a>
          <span>
            <a href="#">[32]</a>
          </span>
        </li>
      </ul>
      <div className="remote_container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TrendingBoard;
