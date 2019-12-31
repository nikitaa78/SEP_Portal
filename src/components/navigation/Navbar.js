import React, { Component } from 'react';
import './Navbar.css';
import seplogo from '../../img/SEPlogo.svg';
import {Redirect, NavLink} from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <a href="/home"><img src={seplogo} id="logo"/></a>
        <nav>
          <ul className="navItems">
            <li><NavLink to="/budget">BUDGET</NavLink></li>  
            <li><NavLink to="/actives">ACTIVES</NavLink></li>
            <li><NavLink to="/alumni">ALUMNI</NavLink></li>
            <li><NavLink to="/feedback">FEEDBACK</NavLink></li>   
            <li><ProfileMenu imgURL={this.props.imgURL} /></li>
          </ul>
        </nav>
        <div className="clear"></div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   startLogout: () => dispatch(startLogout())
// });


// export default connect(undefined, mapDispatchToProps) (NavBar);

export default Navbar;