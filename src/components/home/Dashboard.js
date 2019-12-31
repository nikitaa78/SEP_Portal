import React from 'react';
import { AuthUserContext, withAuthorization } from '../session';
import Navbar from '../navigation/Navbar';

// to get email do authUser.uid

const h3Style = {
  fontStyle: 'italic',
}

const Dashboard = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Navbar imgURL={authUser.photoURL} />
        <div style={{padding: '0 100px'}}>
          <h1>{authUser.displayName}</h1>
          <h3 style={h3Style}>SPRING 2020</h3>
          
          <h1>Attendance</h1>
          <p>Blah blah blah</p>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);