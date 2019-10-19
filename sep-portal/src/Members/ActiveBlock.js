import React, { Component } from 'react';
import './ActiveBlock.css';

class ActiveBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="activeContainer">
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.pledgeClass}</p>
        </div>
      </div>
    );
  }
}


export default ActiveBlock;
