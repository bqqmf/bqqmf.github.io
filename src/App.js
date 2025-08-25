import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SmartDesign from "./SmartDesign";
import CapstoneDesign from "./CapstoneDesign";
import UXDesign from "./UXDesign";
import "./style.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/smart-design" element={<SmartDesign />}></Route>
        <Route path="/capstone-design" element={<CapstoneDesign />}></Route>
        <Route path="/UX-design" element={<UXDesign />}></Route>
      </Routes>
    </HashRouter>
  );
}
