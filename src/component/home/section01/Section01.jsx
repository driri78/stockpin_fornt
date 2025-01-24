import React from "react";
import Search from "./search/Search";
import Login from "./login/Login";
import "../../../assets/css/home/section01.css";

const Section01 = () => {
  return (
    <section className="section01">
      <Search />
      <Login />
    </section>
  );
};

export default Section01;
