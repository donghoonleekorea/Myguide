import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import Home from './Home';

const Dashboard = ({ isAuthenticated, setIsAuthenticated, isSearched, setIsSearched }) => {

  // const [saveTour, setSaveTour] = useState([])

  return (
    <div className="dashboard">
      <Routes>
        <Route
          path="/"
          element={<Home isSearched={isSearched} setIsSearched={setIsSearched} />}
        />
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated}/>}
        />
        <Route
          path="/profile"
          element={<Profile isAuthenticated={isAuthenticated}/>}
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated}/>}
        />
        <Route
          path="/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated}/>}
        />
      </Routes>
    </div>
  );
};

export default Dashboard;