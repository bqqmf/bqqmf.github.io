import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SmartDesign.css"; // CSS 분리 가능
import ProductCard from "../ProductCard";

export default function SmartDesign() {
  const navigate = useNavigate();
  const data = [
    {
      image: "images/SmartDesign/product-card_1.jpg",
      image_detail: "images/SmartDesign/product-card_1.jpg",
      title: "제품명1",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_2.jpg",
      image_detail: "images/SmartDesign/product-card_2.jpg",
      title: "제품명2",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_3.png",
      title: "Ziggleit",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_4.jpg",
      image_detail: "images/SmartDesign/product-card_4.jpg",
      title: "제품명4",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },

  ];

  return (
    <div className="main">
        <img className="intro-img" src="images/SmartDesign/intro.png" style={{ width: "832px", height: "auto" }} />
        <div className="products-grid">
          {data.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>

    </div>
  );
}
