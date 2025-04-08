import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Email = () => {
  return (
    <div className="email_box">
      <div className="input_box">
        <input className="essential_input" type="text" placeholder="이메일" />
      </div>
      <div>
        <span>@</span>
      </div>
      <div className="select_box essential_input">
        <span>선택</span>
        <IoIosArrowDown />
        <ul className="">
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
};

export default Email;
