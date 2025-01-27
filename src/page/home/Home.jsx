import React from "react";
import "../../assets/css/home/home.css";
import Section01 from "../../component/home/section01/Section01";
import Section02 from "../../component/home/section02/Section02";

const Home = () => {
  return (
    <div className="home_container">
      <Section01 />
      <Section02 />
    </div>
  );
};

export default Home;
