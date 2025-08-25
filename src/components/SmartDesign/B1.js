import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./B1.css"; // CSS 분리 가능

export default function UXDesign() {
  const navigate = useNavigate();

  return (
    <div >
      <p>Hello, i'm B1 Page. Click me</p>
      <Link to="/smart-design">
        <img src="../images/hello.png" alt="Home Button"
          style={{ width: "500px", height: "350px", cursor: "pointer" }} />
      </Link>
    </div>
  );
}
