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
          <div className="name_box">
            <input type="text" placeholder="이름" />
          </div>
          <div className="birth_box">
            <div className="item">
              <input type="text" placeholder="생년월일" maxLength={"6"} />
            </div>
            <div>
              <span>-</span>
            </div>
            <div className="after_number_box">
              <div className="item">
                <input type="text" placeholder="" maxLength={"1"} />
              </div>
              <span className="secret_number">●●●●●●</span>
            </div>
          </div>
          <div className="phone_box">
            <button>
              <div className="select_box">
                <span>통신사</span>
                <IoIosArrowDown />
              </div>
              <ul className="active">
                <li>SKT</li>
                <li>KT</li>
                <li>LG U+</li>
                <li>SKT 알뜰폰</li>
                <li>KT 알뜰폰</li>
                <li>LG U+ 알뜰폰</li>
              </ul>
            </button>
            <div>
              <input type="text" placeholder="휴대폰 번호" />
            </div>
          </div>
        </div>
        <div className="sign_check_box">
          <div className="item">
            <Check />
            <input type="checkbox" id="all" />
            <label htmlFor="all">필수 약관에 모두 동의</label>
          </div>
          <div className="item">
            <Check />
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">휴대폰 본인확인 서비스 약관동의</label>
          </div>
          <div className="item">
            <Check />
            <input type="checkbox" id="check2" />
            <label htmlFor="check2">준회원 이용약관</label>
          </div>
          <div className="item">
            <Check />
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
