import React from "react";
import "@assets/css/my_account/aside.css";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <nav className="my_account_aside_container">
      <ul>
        <li className="active">
          <Link to="assets">자산</Link>
        </li>
        <li>
          <Link to="trading_history">거래 내역</Link>
        </li>
        <li>
          <Link to="#">주문 내역</Link>
        </li>
        <li>
          <Link to="#">판매 수익</Link>
        </li>
        <li>
          <Link to="#">배당 내역</Link>
        </li>
        <li>
          <Link to="#">이자 내역</Link>
        </li>
        <li>
          <Link to="#">계좌 관리</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Aside;
