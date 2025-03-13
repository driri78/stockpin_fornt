import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div>
        <h2>로그인</h2>
      </div>
      <div>
        <ul>
          <li>핸드폰 번호로 로그인</li>
          <li>QR코드로 로그인</li>
        </ul>
        <div>
          <div>
            <div>
              <input type="text" placeholder="이름" />
            </div>
            <div>
              <input type="text" placeholder="생년월일 6자리" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="휴대폰 번호" />
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <label htmlFor="">필수 약관에 모두 동의</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="">개인정보 수집·이용 동의</label>
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="">개인정보 제3자 제공 동의</label>
          </div>
        </div>
        <div>
          <button>로그인</button>
        </div>
      </div>
      <div>
        <span>아직 스톡핀 회원이 아닌가요?</span>
        <Link to="#">가입하기</Link>
      </div>
    </>
  );
};

export default SignIn;
