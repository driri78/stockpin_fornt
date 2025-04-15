import React, { useState } from "react";

const Birth = () => {
  const [birth, setBirth] = useState(""); // 생년월일
  const [idPart, setIdPart] = useState(""); //

  const isValid = (typeFnc) => (e) => {
    const inputVal = e.target.value;

    if (/^\d*$/.test(inputVal)) {
      typeFnc(inputVal);
    }
  };
  return (
    <div className="birth_box">
      <div className="item">
        <input
          className="essential_input"
          type="text"
          placeholder="생년월일"
          maxLength={"6"}
          onChange={isValid(setBirth)}
          value={birth}
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
            onChange={isValid(setIdPart)}
            value={idPart}
          />
        </div>
        <span className="secret_number">●●●●●●</span>
      </div>
    </div>
  );
};

export default Birth;
