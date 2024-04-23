import { useState } from "react";
import logoSvg from "./logo.svg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-100 shadow-sm m-2">
      <div className="logo-container">
        <Link to="/">
          <img src={logoSvg} alt="App Logo" className="w-36 mx-4" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex  px-4 mx-4 gap-8 text-xl"> 
          <li className="text-sm">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
            <Link to='/instamart'>Instamart</Link>
          </li>
          <li><i class="ri-shopping-bag-4-fill"></i><span>(0)</span></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
