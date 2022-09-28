import React from 'react';
import { useNavigate } from 'react-router';
import apiService from '../ApiServices';
import { Link } from 'react-router-dom';

const Logout = (props) =>  {

  let navigate = useNavigate();
  const handleSubmit = () => {
    apiService.logout();
    handleAuth();
  }
  const handleAuth = () => {
    props.setIsAuthenticated(false);
    navigate('/');
  }

  return (

    <div className='logout'>
      <h2>Are you sure you want to log out?</h2>
      <Link to="/profile">
        <button className="logoutBtn">No</button>
      </Link>
      <button className="logoutBtn" onClick={() => handleSubmit()}>
        Yes
      </button>
    </div>

  );

}



export default Logout;