import { useState } from 'react';
import logoSvg from './logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
        <Link to="/">
          <img
            src={logoSvg}
            alt="App Logo"
            className="logo"
          />
        </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className='login' onClick={()=>{
              btnNameReact === 'Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login") 
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };