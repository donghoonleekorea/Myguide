import React, {useState} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import auth from './utils/auth'

import './App.css';


function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </Router>
      </div>
    </div>
  );
}

export default App;
