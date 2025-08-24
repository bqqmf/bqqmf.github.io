import React from "react";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <hr className="line" />
        <div className="sub-header">
          <div className="bold" style={{ fontSize: "28px" }}>53rd</div>
          <div>
            <p className="medium title">Digital Industrial Design Graduation Exhibition</p>
          </div>

        </div>
      </header>

      {/* Main */}
      <main>
        {/* Intro Section */}
        <section className="intro" style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
          <img src="images/logo.png" alt="Exhibition Poster" style={{ width: "500px", height: "350px" }} />

          <div style={{ flex: 1, minWidth: "280px", marginLeft: "29px" }}>
            <p className="semi-bold" style={{ fontSize: "80px", margin: 0 }}>휘광(輝光)</p>
            <p className="medium" style={{ fontSize: "40px", margin: "40px 0 0 0" }}>푸른 휘광이 어둠을 가르듯이</p>
            <p className="light" style={{ fontSize: "20px", marginTop: "9px" }}>
              불확실함이 짙게 내려앉은 어둠 속, 각자의 시선과 감각은 푸른빛 처럼 번져 나아갈 길을 비춥니다. <br />
              완전한 정답을 좇기 보다는 불완전함을 두려워하지 않고 과감히 가르고 나아간 <br />
              그 찰나의 직관 들이 모여 하나의 결을 이루었습니다. <br />
              <br />
              이는 단순한 빛이 아닌 어둠을 인식하는 순간 피어나는 내면의 응답입니다.<br />
              우리는 이 전시를 통해 누군가의 마음에 닿을 작은 물음 하나, 고요히 스며드는 빛 한 줄기를 건넵니다.
            </p>
          </div>
          <div className="subjects">
            <button>Subject</button>
            <button>Smart Design</button>
            <button>Capstone Design</button>
            <button>UX Design</button>
          </div>
        </section>

        <hr className="line" />

        <section className="image-section">
          <div className="image-container">
            <img src="images/schedule.png" alt="Exhibition Poster" />
          </div>
        </section>
        <a
          className="semi-bold insta-link"
          href="https://www.burgerking.co.kr/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          @insta
        </a>

        <hr className="line" />

        <section className="image-section">
          <div className="image-container">
            <img src="images/committee.png" alt="committee" />
          </div>
        </section>
        <section className="image-section">
          <div className="image-container">
            <img src="images/SmartDesignA3.png" alt="Exhibition Poster" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        &copy; 2025 Digital Industrial Design Graduation Exhibition
      </footer>
    </div>
  );
}
