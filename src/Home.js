import React from "react";
import Subjects from "./Subjects.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}

      {/* Main */}
      <main>
        <img src="images/home_1.png" style={{ width: "1440px", height: "auto" }} />
        <Subjects />
        <img src="images/home_2.png" style={{ width: "1440px", height: "auto" }} />

        <a
          className="semi-bold insta-link"
          href="https://www.burgerking.co.kr/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          @insta
        </a>

      </main>

    </div>
  );
}
