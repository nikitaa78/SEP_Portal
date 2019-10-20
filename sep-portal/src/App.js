import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.js';
import Homepage from './Homepage.js';
import ActiveProfile from './Members/ActiveProfile.js';
import Actives from './Members/Actives.js'
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Actives} />
          <Route path="/active" component={ActiveProfile} />
        </div>
      </Router>
  );
}

export default App;
