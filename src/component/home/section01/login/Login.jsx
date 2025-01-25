import React from "react";
import "../../../../assets/css/home/section01/login.css";
const Login = () => {
  return (
    <div className="login_container">
      <div className="login_box">
        <form action="" method="get">
          <div className="userId_input_box">
            <label htmlFor="">아이디</label>
            <input type="text" />
          </div>
          <div className="userPw_input_box">
            <label htmlFor="">비밀번호</label>
            <input type="password" />
          </div>
          <div className="login_btn">
            <button type="submit">로그인</button>
          </div>
        </form>
        <nav className="login_sub_menu">
          <ul>
            <li>
              <a href="#">아이디 찾기</a>
            </li>
            <li>
              <a href="#">비밀번호 찾기</a>
            </li>
            <li>
              <a href="#">회원가입</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Login;
