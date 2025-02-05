import React from "react";
import Header from "@component/header/Header";
import Footer from "@/component/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
<<<<<<< HEAD
      <main>
        <Outlet />
      </main>
=======
      <Outlet />
>>>>>>> d1e65804657ad71cfe85e53a9f607d6e922be652
      <Footer />
    </div>
  );
};

export default Layout;
