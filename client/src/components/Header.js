import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({ isAuthenticated, setIsSearched }) => {


  return (
    <div className="header-container">
      <div className="headerBar">
        <img className="headerLogo" src='https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/myGuideLogo.png' alt="logo"></img>
        <input className="searchBox" type='text' onChange={e => setIsSearched((e.target.value).toLowerCase())} placeholder='    Country or City'>
        </input>
      </div>
      <div className="nav-container">
        <div className="navBar">
          <Link className="link" to="/">
            <img className="homeIcon" src='https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/home.png' alt="logo"></img>
          </Link>
          { isAuthenticated ? (
          <>
            <Link className="link" to="/profile">
              <img className="mypageIcon" src='https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/list.png' alt="logo"></img>
            </Link>
            <Link className='link' to='/logout'>
              <img className='logoutIcon' src='https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/logout.png' alt='logo'></img>
            </Link>
          </>
          ) : (
          <>
            <Link className="link" to="/register">
              <img className="registerIcon" src='https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/register.png' alt="logo"></img>
            </Link>
            <Link className="link" to="/login">
              <img className="loginIcon" src='https://myguidefirstsoloproject2022codeworks.s3.eu-central-1.amazonaws.com/assets/login.png' alt="logo"></img>
            </Link>
          </>
          )}         
        </div>
      </div>
    </div>
  )

}

export default Header;