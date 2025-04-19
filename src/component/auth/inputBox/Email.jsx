import React, { forwardRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Email = forwardRef(({ select, setSelect }, ref) => {
  const [afterDomain, setAfterDomain] = useState("");

  return (
    <div className="email_box">
      <div className="essential_input input_box">
        <input className="text" type="text" placeholder="이메일" />
      </div>
      <div>
        <span>@</span>
      </div>
      <div
        ref={ref}
        className="select_box essential_input"
        onClick={() => setSelect(!select)}
      >
        <div className="default show">
          <span className="text">선택</span>
          <IoIosArrowDown />
        </div>
        <div className="direct ">
          <input
            className="text"
            type="text"
            placeholder={"직접 입력"}
            value={afterDomain}
            onChange={setAfterDomain}
          />
        </div>
        <ul className={select ? "active" : ""}>
          <li>naver.com</li>
          <li>gmail.com</li>
          <li>daum.net</li>
          <li>hanmail.net</li>
          <li>icloud.com</li>
          <li>outlook.com</li>
          <li>직접입력</li>
        </ul>
      </div>
    </div>
  );
});

export default Email;
