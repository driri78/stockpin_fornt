import Header from "@/component/auth/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import "@assets/css/auth/layout.css";

const AuthLayout = () => {
  return (
    <div className="auth_container">
      <Header />
      <main className="main_auth">
        <div className="wrap_auth_content">
          <div className="auth_content">
            <Outlet />
          </div>
        </div>
        <div className="background_color_box"></div>
      </main>
    </div>
  );
};

export default AuthLayout;
