import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SmartDesign.css"; // CSS 분리 가능

export default function SmartDesign() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <Link to="/">
        <img src="../images/SmartDesign/home.png" alt="Home Button"
          // style={{ width: "50px", height: "50px", cursor: "pointer" }} />
          className="home-image" />
      </Link>

      <div className="class-image-container">
        <img
          src="../images/SmartDesign/logo.png"
          alt="Smart Design 배경 이미지"
          className="background-image"
        />
        <div className="button-overlay">
          <Link to="/smart-design/A1">
            <img
              src="../images/SmartDesign/Aclass.png"
              alt="A Class 버튼"
              className="action-image"
            />
          </Link>
          <Link to="/smart-design/B1">
            <img
              src="../images/SmartDesign/Bclass.png"
              alt="B Class 버튼"
              className="action-image"
            />
          </Link>
        </div>
      </div>
      <div className="intro-image-container">
        <img
          src="../images/SmartDesign/intro.png"
          alt="과목 소개"
          className="intro-image"
        />
      </div>
    </div>
  );
}
