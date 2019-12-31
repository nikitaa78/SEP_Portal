import React, { Component } from 'react';
import './Feedback.css';
import Navbar from '../navigation/Navbar';
import { AuthUserContext, withAuthorization } from '../session';

class Feedback extends Component {
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
              <h1>Feedback</h1>
              <p>This website is perfect, no feedback needed</p>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
		);
	}
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Feedback);