import { useNavigate, Link } from "react-router-dom";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <img src="images/main_page.png" alt="main page" style={{ width: "1440px", height: "972px" }} />
      <Link to="/home">
        <button className="enter-btn">ENTER</button>
        </Link>
    </div>
  );
}
