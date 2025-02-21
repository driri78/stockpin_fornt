import React from "react";
import "@assets/css/my_account/layout.css";
import Aside from "@component/my_account/Aside";
import { Outlet } from "react-router-dom";

const MyAccountLayout = () => {
  return (
    <div className="my_account_container">
      <Aside />
      <Outlet />
    </div>
  );
};

export default MyAccountLayout;
