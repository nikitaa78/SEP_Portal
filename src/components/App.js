import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInPage from './auth/Signin';
import ActiveProfile from './members/ActiveProfile';
import Actives from './members/Actives';
import Budget from './budget/Budget';
import Alumni from './alumni/Alumni';
import Feedback from './feedback/Feedback';
import NotFoundPage from './notfound/NotFoundPage';
import Dashboard from './home/Dashboard';

import { withAuthentication } from './session';

// import {firebase} from './firebase/firebase';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';

// const store = configureStore();

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={SignInPage} />
      <Route path="/home" component={Dashboard} />
      <Route path="/actives" component={Actives} />
      <Route path="/active" component={ActiveProfile} />
      <Route path="/budget" component={Budget} />
      <Route path="/alumni" component={Alumni} />
      <Route path="/feedback" component={Feedback} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default withAuthentication(App);
