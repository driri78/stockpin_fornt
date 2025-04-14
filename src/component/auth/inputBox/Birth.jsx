import React from "react";

const Birth = () => {
  return (
    <div className="birth_box">
      <div className="item">
        <input
          className="essential_input"
          type="text"
          placeholder="생년월일"
          maxLength={"6"}
        />
      </div>
      <div>
        <span>-</span>
      </div>
      <div className="after_number_box">
        <div className="item">
          <input
            className="essential_input"
            type="text"
            placeholder=""
            maxLength={"1"}
          />
        </div>
        <span className="secret_number">●●●●●●</span>
      </div>
    </div>
  );
};

export default Birth;
