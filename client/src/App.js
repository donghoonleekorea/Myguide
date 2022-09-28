import React, {useState} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';


function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSearched, setIsSearched] = useState('');

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header 
          isAuthenticated={isAuthenticated} 
          setIsSearched={setIsSearched} />
          <Dashboard 
          isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} 
          isSearched={isSearched} setIsSearched={setIsSearched} />
        </Router>
      </div>
    </div>
  );
}

export default App;
