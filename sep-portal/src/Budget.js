import React, { Component } from 'react';
import './Budget.css';
import NavBar from './NavBar.js';
import {Redirect, Link} from 'react-router-dom';


class Budget extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<body>
		        <NavBar />
		        <div>
		          	Here's our budget page!
		        </div>
		    </body>
		);
	}
}

export default Budget;