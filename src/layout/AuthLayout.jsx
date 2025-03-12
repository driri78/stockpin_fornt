import Header from "@/component/auth/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;
