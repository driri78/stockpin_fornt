import React from "react";
import { Link } from "react-router-dom";
import "@assets/css/auth/signIn.css";

const SignIn = () => {
  return (
    <div className="sign_in">
      <div className="sign_in_title">
        <h2>로그인</h2>
      </div>
      <div className="sign_in_content">
        <ul>
          <li>휴대폰 번호로 로그인</li>
          <li>QR코드로 로그인</li>
        </ul>
        <div className="sign_in_input_box">
          <div className="name_birth_box">
            <div className="item">
              <input type="text" placeholder="이름" />
            </div>
            <div className="item">
              <input type="text" placeholder="생년월일 6자리" />
            </div>
          </div>
          <div className="phone_box">
            <input type="text" placeholder="휴대폰 번호" />
          </div>
        </div>
        <div className="sign_in_check_box">
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="">필수 약관에 모두 동의</label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="">개인정보 수집·이용 동의</label>
          </div>
          <div className="item">
            <input type="checkbox" />
            <label htmlFor="">개인정보 제3자 제공 동의</label>
          </div>
        </div>
        <div className="sign_in_btn_box">
          <button>로그인</button>
        </div>
      </div>
      <div className="sign_in_footer">
        <span>아직 스톡핀 회원이 아닌가요?</span>
        <Link to="#">가입하기</Link>
      </div>
    </div>
  );
};

export default SignIn;
