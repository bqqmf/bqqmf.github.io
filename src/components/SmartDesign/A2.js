import React from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import "./A1.css"; // CSS 분리 가능

export default function UXDesign() {
    const navigate = useNavigate();
    const location = useLocation();

    const products = ["A1", "A2", "A3", "A4", "A5"];

    return (
        <div className="main">
            <div className="product-header">
                <Link to="/smart-design">
                    <p className="semi-bold subject-name">Smart Design</p>
                </Link>
                {/* <p className="regular class-name">A Class</p> */}

            </div>
            <div >
                <div className="product-container">
                    <div className="group-container">
                        <div className="products">
                            {
                                products.map((p, idx) => {
                                    const isActive = location.pathname === `/smart-design/${p}`;
                                    return (
                                        <button
                                            key={p}
                                            onClick={() => navigate(`/smart-design/${p}`)}
                                            className={isActive ? "active" : ""}
                                        >
                                            {isActive ? `제품 ${idx + 1}` : `제품 ${idx + 1}`}
                                        </button>
                                    );
                                    // <button onClick={() => navigate("/smart-design/A1")}>제품 1</button>
                                    // <button onClick={() => navigate("/smart-design/A2")}>제품 2</button>
                                    // <button onClick={() => navigate("/smart-design/A3")}>제품 3</button>
                                    // <button onClick={() => navigate("/smart-design/A4")}>제품 4</button>
                                    // <button onClick={() => navigate("/smart-design/A5")}>제품 5</button>
                                })}
                        </div>
                        <div className="group-member">
                            <h3 className="semi-bold" style={{fontSize: "40px", margin: "0 0 25px 0" }}>A-2</h3>
                            <p>홍길동</p>
                            <p>홍길동</p>
                            <p>홍길동</p>
                            <p>홍길동</p>
                        </div>
                        <div className="logo-overlay">
                                <img
                                    src="../images/SmartDesign/logo_A3.png"
                                    alt="A3 Logo"
                                    className="logo-image-A3"
                                />
                        </div>

                    </div>

                    <hr className="line" />

                    <div>
                        <section className="product-image-section">
                            <div className="product-image-container">
                                <img src="images/SmartDesignA3.png" alt="Exhibition Poster" />
                            </div>
                        </section>
                        <div>
                            <Link to="/smart-design">
                                <img src="../images/back-button.png" alt="Home Button"
                                    style={{ width: "66px", height: "66px", cursor: "pointer", marginTop: "102px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
