import React, { Component } from 'react';
import './Feedback.css';
import NavBar from './NavBar.js';
import {Redirect, Link} from 'react-router-dom';


class Feedback extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<body>
		        <NavBar />
		        <div>
		          	Here's our feedback page!
		        </div>
		    </body>
		);
	}
}

export default Feedback;