import { useState } from 'react';
import logoSvg from './logo.svg';

export const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={logoSvg}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className='login' onClick={()=>{
              btnNameReact === 'Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login") 
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;