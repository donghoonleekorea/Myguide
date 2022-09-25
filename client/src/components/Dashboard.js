import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
// import Logout from './Logout';
import Home from './Home';

const Dashboard = ({ isAuthenticated ,setIsAuthenticated }) => {
  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated}/>}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/profile"
          element={<Profile isAuthenticated={isAuthenticated}/>}
        />
        <Route
          path="/Login"
          element={<Login setIsAuthenticated={setIsAuthenticated}/>}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;