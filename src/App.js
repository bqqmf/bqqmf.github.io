import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import SmartDesign from "./components/SmartDesign/SmartDesign";
import SmartDesignA1 from "./components/SmartDesign/A1";
import SmartDesignA2 from "./components/SmartDesign/A2";
import SmartDesignA3 from "./components/SmartDesign/A3";
import SmartDesignA4 from "./components/SmartDesign/A4";
import SmartDesignA5 from "./components/SmartDesign/A5";
import SmartDesignB1 from "./components/SmartDesign/B1";
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
        <Route path="/smart-design/A1" element={<SmartDesignA1 />}></Route>
        <Route path="/smart-design/A2" element={<SmartDesignA2 />}></Route>
        <Route path="/smart-design/A3" element={<SmartDesignA3 />}></Route>
        <Route path="/smart-design/A4" element={<SmartDesignA4 />}></Route>
        <Route path="/smart-design/A5" element={<SmartDesignA5 />}></Route>

        <Route path="/smart-design/B1" element={<SmartDesignB1 />}></Route>

        <Route path="/capstone-design" element={<CapstoneDesign />}></Route>

        <Route path="/UX-design" element={<UXDesign />}></Route>
      </Routes>
    </HashRouter>
  );
}
