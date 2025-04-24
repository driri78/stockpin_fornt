import React from "react";
import { FaHeart } from "react-icons/fa";

const LikeBtn = () => {
  return (
    <div className="like_btn_img_box">
      <FaHeart style={{ color: "var(--primary-color)" }} />
    </div>
  );
};

export default LikeBtn;
