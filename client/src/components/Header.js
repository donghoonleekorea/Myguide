import React from 'react';
import logo from  "../assets/myGuideLogo.png";
import homeLogo from  "../assets/home.png";
import labelLogo from  "../assets/label.png";
import coupon from  "../assets/coupon.png";
import userLogo from  "../assets/user.png";
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className="header-container">
      <div className="headerBar">
        <img className="headerLogo" src={logo} alt="logo"></img>
        <input className="searchBox" placeholder='    Country or City'></input>
      </div>
      <div className="nav-container">
        <div className="navBar">
          <Link className="link" to="/">Home</Link>
          {/* <img className="homeIcon" src={homeLogo} alt="logo"></img> */}

          <Link className="link" to="/profile">My Page</Link>
          {/* <img className="mypageIcon" src={labelLogo} alt="logo"></img> */}

          <Link className="link" to="/register">Register</Link>
          {/* <img className="couponIcon" src={coupon} alt="logo"></img> */}

          <Link className="link" to="/login">Login</Link>
          {/* <img className="userIcon" src={userLogo} alt="logo"></img> */}
        </div>
      </div>
    </div>
  )

}

export default Header;