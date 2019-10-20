import React, { Component } from 'react';
import './NavBar.css';
import nupic from './nu-sf.jpeg';
import seplogo from './SEPlogo.svg';
import Homepage from './Homepage.js';
import {Redirect, Link} from 'react-router-dom';


class NavBar extends Component {

	constructor(props) {
		super();
	}

	render() {
		return (
			<div id='nav'>
				<a href="/home"><img src={seplogo} id="logo"/></a>
				<nav>
				<ul class="nav">
                	<li><a href="/budget">Budget</a></li>  
	                <li><a href="/alumni">Alumni</a></li>
	                <li><a href="/feedback">Feedback</a></li>        
              	</ul>
              	</nav>
            <div class="clear"></div>
            </div>
		);
	}
}

export default NavBar;