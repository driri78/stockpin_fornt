import React from "react";
import { Link } from "react-router-dom";
import "@assets/css/auth/signIn.css";
import { Check } from "@assets/images/Image";
const SignIn = () => {
  return (
    <div className="sign_in">
      <div className="sign_in_title">
        <h2>
          <span>스톡핀 로그인</span>
          <span>😊</span>
        </h2>
      </div>
      <div className="sign_in_content">
        <ul>
          <li className="active">휴대폰 번호로 로그인</li>
          <li>QR코드로 로그인</li>
        </ul>
        <div className="sign_in_input_box">
          <div className="name_birth_box">
            <div className="item">
              <input type="text" placeholder="이름" />
            </div>
            <div className="item">
              <input type="text" placeholder="생년월일 6자리" maxLength={"6"} />
            </div>
          </div>
          <div className="phone_box">
            <input type="text" placeholder="휴대폰 번호" maxLength={"13"} />
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
            <label htmlFor="check1">개인정보 수집·이용 동의</label>
          </div>
          <div className="item">
            <Check />
            <input type="checkbox" id="check2" />
            <label htmlFor="check2">개인정보 제3자 제공 동의</label>
          </div>
        </div>
        <div className="sign_btn_box">
          <button>로그인</button>
        </div>
      </div>
      <div className="sign_footer">
        <span>아직 스톡핀 회원이 아닌가요?</span>
        <Link to="/signup">가입하기</Link>
      </div>
    </div>
  );
};

export default SignIn;
