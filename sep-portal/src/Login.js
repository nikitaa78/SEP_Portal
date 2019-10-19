import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import nupic from './nu-sf.jpeg';
import Homepage from './Homepage.js';
import {Redirect, Link} from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import {firebaseApp} from './firebaseDB.js';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  constructor(props) {
      super();
      // when you want to iniitialize state
      // (ex. below is setting initial value for 'inputBoxValue')
      this.redirectToHome = this.redirectToHome.bind(this);
  }


  redirectToHome() {
    console.log("HELLOOO")
    this.props.history.push('/home');
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="LoginPage">
        <div className="Login-main">
          <div className="loginPic">
            <img className="nupic" src={nupic}/>
          </div>
          <div className="loginText">
          {console.log(user)}
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <Redirect to={{
                    pathname: '/home',
                    state: { signOutButton: '123' }
                }}
              />
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
          </div>
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);

// function Login() {
//   return (
//     <div className="LoginPage">
//       <div className="Login-main">
//         <div className="loginPic">
//           <img className="nupic" src={nupic}/>
//         </div>
//         <div className="loginText">
//         </div>
//       </div>
//     </div>
//   );
// }
// 
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     {
//       user
//         ? <p>Hello, {user.displayName}</p>
//         : <p>Please sign in.</p>
//     }
//
//     {
//       user
//         ? <button onClick={signOut}>Sign out</button>
//         : <button onClick={signInWithGoogle}>Sign in with Google</button>
//     }
//   </header>
// </div>

// export default Login;
