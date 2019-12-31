import React, { Component } from 'react';
import SignOutButton from '../auth/Signout';

const profileImageStyle = {
  width: '30px',
  borderRadius: '30px',
}

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>

        <img src={this.props.imgURL} alt="picture" style={profileImageStyle} onClick={this.showMenu} />
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <SignOutButton /> 
              </div>
            )
            : null
        }
      </div>
    );
  }
}


export default ProfileMenu;