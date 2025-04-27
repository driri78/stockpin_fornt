import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeBtn = () => {
  const [like, setlike] = useState(false);
  return (
    <div
      className={`like_btn_img_box ${like ? "active" : ""}`}
      onClick={(e) => setlike(!like)}
    >
      <FaHeart />
    </div>
  );
};

export default LikeBtn;
