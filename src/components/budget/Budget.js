import React, { Component } from 'react';
import './Budget.css';
import Navbar from '../navigation/Navbar';
import { AuthUserContext, withAuthorization } from '../session';

class Budget extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AuthUserContext.Consumer>
        {authUser => (
          <div>
            <Navbar imgURL={authUser.photoURL} />
            <div style={{padding: '0 100px'}}>
              <h1>Budget</h1>
              <p>We ran out of money lol</p>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
		);
	}
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Budget);