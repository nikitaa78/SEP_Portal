import React, { Component } from 'react';
import './ActiveProfile.css';

class ActiveProfile extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    console.log("REDIRECTED!!", this.props.location.state.user);
    console.log("REDIRECTED!!", this.props);

    return (
      <div class="background">
        <div class="modal">
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
        <p>{this.props.pledgeClass}</p>
        </div>
      </div>
    );
  }
}

export default ActiveProfile;
