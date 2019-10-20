import React, { Component } from 'react';
import './NavBar.css';
import Homepage from './Homepage.js';
import {Redirect, Link} from 'react-router-dom';


class NavBar extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div>
              <ul id="nav">
                <li><a href="/feedback">Feedback</a></li>
                <li><a href="/alumni">Alumni</a></li>
                <li><a href="/budget">Budget</a></li>
                <li><a href="/home">Home</a></li>
              </ul>
            </div>
		);
	}
}

export default NavBar;