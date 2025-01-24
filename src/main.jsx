import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/reset.css";
import Footer from "./component/Footer.jsx";
import Header from "./component/header/Header.jsx";
import Home from "./page/home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>
);
