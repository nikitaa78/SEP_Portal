import React, { Component } from 'react';
import './ActiveBlock.css';

class ActiveBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let name = this.props.user.name.first + " " + this.props.user.name.last;
    return (
        <div className="activeContainer" onClick={this.props.onClick}>
          <div>
            <p>{name}</p>
            <p>{this.props.user.email}</p>
            <p>{this.props.user.phone}</p>
            <p>{this.props.user.pledgeClass}</p>
          </div>
        </div>
    );
  }
}

export default ActiveBlock;
