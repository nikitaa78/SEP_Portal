import React, { Component } from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../firebase';
import loginPhoto from '../../img/nu-sf.jpeg';
import GoogleButton from 'react-google-button';
import './Signin.css';

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onClick = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        this.setState({ error: null });
        console.log("Logging in and going to /home");
        this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <div className="LoginPage">
        <div className="Login-main">
          <div className="loginPic">
            <img className="nupic" src={loginPhoto}/>
          </div>
          <div className="loginText">
            <img src={require('../../img/SEPlogo.svg')} alt="" style={{width: '150px', paddingBottom: '50px'}} />
            <GoogleButton onClick={this.onClick} />
            {error && <p>{error.message}</p>}
          </div>
        </div>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

export default SignInPage;
export { SignInGoogleBase };