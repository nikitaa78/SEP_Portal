import React, { Component } from 'react';
import './Alumni.css';
import NavBar from './NavBar.js';
import {Redirect, Link} from 'react-router-dom';


class Alumni extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<body>
		        <NavBar />
		        <div>
		          	Here's our alumni page!
		        </div>
		    </body>
		);
	}
}

export default Alumni;