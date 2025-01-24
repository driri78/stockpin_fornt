import "../../assets/css/header/header.css";
import { PiMoonStarsFill, PiSunHorizonFill } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <h1>
        로고
        <span>StockPin</span>
      </h1>
      <nav className="main_menu">
        <ul>
          <li>
            <a href="#">뉴스</a>
          </li>
          <li>
            <a href="#">시세&차트</a>
          </li>
          <li>
            <a href="#">자유게시판</a>
          </li>
          <li>
            <a href="#">마이페이지</a>
          </li>
          <li>
            <a href="#">대시보드</a>
          </li>
        </ul>
      </nav>
      <nav className="sub_menu">
        <ul>
          <li title="자주 묻는 질문">
            <a href="#">FAQ</a>
          </li>
          <li title="고객센터">
            <a href="#">고객센터</a>
          </li>
          <li className="dark_mode_container">
            <div className="choice_box"></div>
            <a href="#" className="img_box" title="다크 모드">
              <PiMoonStarsFill style={{ width: "1.5rem", height: "1.5rem" }} />
            </a>
            <a href="#" className="img_box" title="화이트 모드">
              <PiSunHorizonFill style={{ width: "1.5rem", height: "1.5rem" }} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
