import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import SmartDesign from "./components/SmartDesign/SmartDesign";
import CapstoneDesign from "./components/CapstoneDesign/CapstoneDesign";
import UXDesign from "./components/UXDesign/UXDesign";
import "./style.css";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/smart-design" element={<SmartDesign />}></Route>

        <Route path="/capstone-design" element={<CapstoneDesign />}></Route>

        <Route path="/UX-design" element={<UXDesign />}></Route>
      </Routes>
    </HashRouter>
  );
}
