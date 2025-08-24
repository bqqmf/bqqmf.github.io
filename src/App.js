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
            <p className="bold title">Digital Industrial Design Graduation Exhibition</p>
          </div>
          
        </div>
      </header>

      {/* Main */}
      <main>
        {/* Intro Section */}
        <section className="intro" style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}>
          <img src="images/logo.png" alt="Exhibition Poster" style={{ width: "500px", height: "350px" }} />

          <div style={{ flex: 1, minWidth: "280px", marginLeft: "29px" }}>
            <h2 style={{ fontSize: "80px", margin: 0 }}>휘광(輝光)</h2>
            <p className="medium" style={{ fontSize: "45px", margin: "40px 0 0 0" }}>푸른 휘광이 어둠을 가르듯이</p>
            <p className="light" style={{ fontSize: "20px", marginTop: "9px" }}>
              불확실함이 짙게 내려앉은 어둠 속, 각자의 시선과 감각은 푸른빛 처럼 번져 나아갈 길을 비춥니다. <br />
              완전한 정답을 좇기 보다는 불완전함을 두려워하지 않고 과감히 가르고 나아간 <br />
              그 찰나의 직관 들이 모여 하나의 결을 이루었습니다. <br />
              <br />
              이는 단순한 빛이 아닌 어둠을 인식하는 순간 피어나는 내면의 응답입니다.<br />
              우리는 이 전시를 통해 누군가의 마음에 닿을 작은 물음 하나, 고요히 스며드는 빛 한 줄기를 건넵니다.
            </p>
          </div>
        </section>
        <div className="subjects">
            <button>Subject</button>
            <button>Smart Design</button>
            <button>Capstone Design</button>
            <button>UX Design</button>
          </div>

        <hr className="line" />

        {/* Schedule Section */}
        <div className="schedule">
          <section>
            <p className="semi-bold" style={{ margin: 0, fontSize: "36px" }}>2025.12.23.(화) - 12.26.(금)</p>

            <div className="schedule-container">
              <div className="schedule-row medium">
                <span className="col-1">12.23(화)</span>
                <span className="col-2">오픈식 / 전시</span>
                <span className="col-3">10:00 - 20:00</span>
              </div>

              <div className="schedule-row medium" style={{ marginTop: "40px" }}>
                <span className="col-1">12.24,25 (수,목)</span>
                <span className="col-2">전시</span>
                <span className="col-3">10:00 - 20:00</span>
              </div>

              <div className="schedule-row medium" style={{ marginTop: "40px" }}>
                <span className="col-1">12.26(금)</span>
                <span className="col-2">전시 / 철수</span>
                <span className="col-3">10:00 - 14:00</span>
              </div>
            </div>
          </section>

          <section className="address">
            <p className="semi-bold" style={{ fontSize: "32px", margin: 0 }}>
              서울특별시 노원구 초안산로 12 은봉관 1F 아정갤러리
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p className="semi-bold" style={{ fontSize: "32px", margin: 0 }}>
                Ajeong Gallery, 1F, Eunbong Hall, 12 Choansan-ro, Nowon-gu, Seoul
              </p>
              <a
                className="semi-bold"
                style={{ fontSize: "32px", color: "#3657FF" }}
                href="https://www.burgerking.co.kr/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                @insta
              </a>
            </div>
          </section>
        </div>

        <hr className="line" />

        {/* Committee Section */}
        <section className="committee">
          <h3 className="semi-bold" style={{ fontSize: "36px", margin: 0 }}>졸업전시준비위원회</h3>
          <h3 className="semi-bold" style={{ fontSize: "36px", margin: 0 }}>Graduation Exhibition Preparation Committee</h3>

          <div className="member-container">
            <div className="member-row">
              <div className="member-group">
                <span className="title">위원장</span>
                <div className="names"><p>박진선</p></div>
              </div>
              <div className="member-group">
                <span className="title">부위원장</span>
                <div className="names"><p>최새롬</p></div>
              </div>
            </div>

            <div className="member-row">
              <div className="member-group">
                <span className="title">편집</span>
                <div className="names">
                  <p>김고은</p><p>유지승</p><p>전시현</p><p>이민영</p><p>유예진</p><p>남수정</p><p>남한별</p>
                </div>
              </div>
              <div className="member-group">
                <span className="title">디자인홍보</span>
                <div className="names">
                  <p>최서윤</p><p>정다원</p><p>김희서</p><p>정무현</p><p>김미진</p><p>김은솔</p>
                </div>
              </div>
            </div>

            <div className="member-row">
              <div className="member-group">
                <span className="title">전시구상</span>
                <div className="names">
                  <p>최의정</p><p>원혜림</p><p>홍준이</p><p>유한나</p>
                </div>
              </div>
              <div className="member-group">
                <span className="title">영상</span>
                <div className="names">
                  <p>안예은</p><p>김민규</p><p>도재용</p><p>안소희</p><p>소민지</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro-section">
          <div className="image-container">
            <img src="images/committee.png" alt="Exhibition Poster" />
          </div>
        </section>
        <section className="intro-section">
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
