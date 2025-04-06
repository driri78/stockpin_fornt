import { Check } from "@/assets/images/Image";
import React from "react";
import { Link } from "react-router-dom";
import "@assets/css/auth/signUp.css";
import { IoIosArrowDown } from "react-icons/io";

const SignUp = () => {
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
          <div className="name_box">
            <input className="essential_input" type="text" placeholder="이름" />
          </div>
          {/* sms api 유료라 주석처리 => 대신 이메일 방식으로 변환*/}
          <div className="phone_box">
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
          </div>
          <div className="email_box">
            <div className="input_box">
              <input
                className="essential_input"
                type="text"
                placeholder="이메일"
              />
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
          <div className="password_box">
            <input
              className="essential_input"
              type="password"
              placeholder="비밀번호"
            />
          </div>
        </div>
        <div className="sign_check_box">
          <div className="item">
            <label className="check_img_box" htmlFor="all">
              <Check />
            </label>
            <input type="checkbox" id="all" />
            <label htmlFor="all">필수 약관에 모두 동의</label>
          </div>
          <div className="item">
            <label className="check_img_box" htmlFor="check1">
              <Check />
            </label>
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">휴대폰 본인확인 서비스 약관동의</label>
          </div>
          <div className="item">
            <label className="check_img_box" htmlFor="check2">
              <Check />
            </label>
            <input type="checkbox" id="check2" />
            <label htmlFor="check2">준회원 이용약관</label>
          </div>
          <div className="item">
            <label className="check_img_box" htmlFor="check3">
              <Check />
            </label>
            <input type="checkbox" id="check3" />
            <label htmlFor="check3">
              개인(신용)정보 수집이용 동의(회원가입/휴대폰 본인인증)
            </label>
          </div>
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
