import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [reactBtn, setReactBtn] = useState(true);
  return (
    <div className=" flex justify-around items-center bg-[#FFFFFF] text-[#1F2937] text-[1.2rem]">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Company's logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>

          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setReactBtn(!reactBtn);
            }}
          >
            {reactBtn ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
