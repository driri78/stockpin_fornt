import React from "react";
import { Link } from "react-router-dom";
import "@assets/css/auth/header.css";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  return (
    <header className="sign_header">
      <h1>
        <Link to="/">
          <span>로고 StockPin</span>
        </Link>
      </h1>
      <button>
        <RxCross2 />
      </button>
    </header>
  );
};

export default Header;
