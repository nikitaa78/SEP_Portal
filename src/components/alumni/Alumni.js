import React, { Component } from 'react';
import './Alumni.css';
import Navbar from '../navigation/Navbar';
import { AuthUserContext, withAuthorization } from '../session';

class Alumni extends Component {
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
              <h1>Alumni</h1>
              <p>We ran out of alumni too</p>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
		);
	}
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Alumni);