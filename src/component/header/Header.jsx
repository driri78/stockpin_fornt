import { Link, useLocation } from "react-router-dom";
import "@assets/css/header/header.css";

const Header = () => {
  const uri = useLocation().pathname;

  return (
    <header className={uri.startsWith("/stock/") ? "stock_detail_header" : ""}>
      <h1>
        <Link to="/">
          <span>로고 StockPin</span>
        </Link>
      </h1>
      <nav className="main_menu">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/stocks">주식 모아보기</Link>
          </li>
          <li>
            <a href="#">뉴스</a>
          </li>
          <li>
            <Link to="/my_account">내 계좌</Link>
          </li>
        </ul>
      </nav>
      <nav className="sub_menu">
        <ul>
          <li>
            <Link to="/signin">
              <button className="login_btn">로그인</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
