import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SmartDesign.css"; // CSS 분리 가능

export default function SmartDesign() {
  const navigate = useNavigate();

  return (
    <div >
      <p>Hello, Click me</p>
      <Link to="/">
        <img src="../images/hello.png" alt="Home Button"
          style={{ width: "500px", height: "350px", cursor: "pointer" }} />
      </Link>
    </div>
  );
}
