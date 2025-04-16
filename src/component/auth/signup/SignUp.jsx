import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "@assets/css/auth/signUp.css";
import Email from "../inputBox/Email";
import Password from "../inputBox/Password";
import AgreementCheckbox from "../AgreementCheckbox";
import Birth from "../inputBox/Birth";

const agreementItems = [
  { id: "all", text: "필수 약관에 모두 동의" },
  { id: "check1", text: "휴대폰 본인확인 서비스 약관동의" },
  { id: "check2", text: "준회원 이용약관" },
  {
    id: "check3",
    text: "개인(신용)정보 수집이용 동의(회원가입/휴대폰 본인인증)",
  },
];
const SignUp = () => {
  const [select, setSelect] = useState(false);
  const ref = useRef(null);

  // outside click Email
  const clickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.addEventListener("mousedown", clickOutside);
    };
  }, []);
  return (
    <div className="sign_up">
      <div className="sign_up_title">
        <h2>
          <span>회원가입</span>
          <span>😮</span>
        </h2>
      </div>
      <div className="sign_up_content">
        <div className="sign_up_input_box">
          <Birth />
          <div className="name_box">
            <input className="essential_input" type="text" placeholder="이름" />
          </div>
          {/* sms api 유료라 주석처리 => 대신 이메일 방식으로 변환*/}
          {/* <div className="phone_box">
            <button>
              <div className="select_box essential_input">
                <span>통신사</span>
                <IoIosArrowDown />
              </div>
              <ul className="">
                <li>SKT</li>
                <li>KT</li>
                <li>LG U+</li>
                <li>SKT 알뜰폰</li>
                <li>KT 알뜰폰</li>
                <li>LG U+ 알뜰폰</li>
              </ul>
            </button>
            <div>
              <input
                className="essential_input"
                type="text"
                placeholder="휴대폰 번호"
              />
            </div> 
          </div>*/}
          <Email ref={ref} select={select} setSelect={setSelect} />
          <Password />
        </div>
        <div className="sign_check_box">
          <AgreementCheckbox data={agreementItems} />
        </div>
        <div className="sign_btn_box">
          <button>인증번호 받기</button>
        </div>
      </div>
      <div className="sign_footer">
        <span>스톡핀 회원가입을 하신적이 있나요?</span>
        <Link to="/signin">로그인</Link>
      </div>
    </div>
  );
};

export default SignUp;
