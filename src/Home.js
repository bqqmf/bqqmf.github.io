import React from "react";
import Subjects from "./Subjects.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}

      {/* Main */}
      <main>
        <img src="images/home_1.png" className="home_1"/>

        <a
          className="semi-bold insta-link"
          href="https://www.burgerking.co.kr/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Insta
        </a>

        <Subjects />

        <img src="images/home_2.png" className="home_2"/>
      </main>
    </div>
  );
}
