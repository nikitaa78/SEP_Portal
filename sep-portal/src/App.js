import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.js';
import Homepage from './Homepage.js';
import ActiveProfile from './Members/ActiveProfile.js';
import Actives from './Members/Actives.js'
import Budget from './Budget';
import Alumni from './Alumni.js';
import Feedback from './Feedback.js';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Actives} />
          <Route path="/active" component={ActiveProfile} />
          <Route path="/budget" component={Budget} />
          <Route path="/alumni" component={Alumni} />
          <Route path="/feedback" component={Feedback} />
        </div>
      </Router>
  );
}

export default App;
