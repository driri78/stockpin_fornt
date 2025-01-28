import React from "react";
import "../../../../assets/css/home/section01/news.css";

const News = () => {
  return (
    <div className="news_container">
      <h2>주요 뉴스</h2>
      <div className="content">
        <div className="item">
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quas
            odio voluptatem unde iste?
          </p>
          <div className="news_info">
            <span>21분전</span>・<span>한국경제</span>
          </div>
        </div>
        <div className="item">
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quas
            odio voluptatem unde iste?
          </p>
          <div className="news_info">
            <span>1시간전</span>・<span>한국경제</span>
          </div>
        </div>
        <div className="item">
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quas
            odio voluptatem unde iste?
          </p>
          <div className="news_info">
            <span>4분전</span>・<span>연합뉴스</span>
          </div>
        </div>
        <div className="item">
          <img src="" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quas
            odio voluptatem unde iste?
          </p>
          <div className="news_info">
            <span>3시간전</span>・<span>서울경제</span>
          </div>
        </div>
      </div>
      <div className="remote_container">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default News;
