import Aside from "@component/my_account/Aside";
import React from "react";
import { Outlet } from "react-router-dom";

const MyAccountLayout = () => {
  return (
    <>
      <Aside />
      <Outlet />
    </>
  );
};

export default MyAccountLayout;
