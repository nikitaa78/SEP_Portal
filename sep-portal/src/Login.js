import React from 'react';
import logo from './logo.svg';
import './Login.css';
import nupic from './nu-sf.jpeg';

function Login() {
  return (
    <div className="LoginPage">
      <div className="Login-main">
        <div className="loginPic">
          <img className="nupic" src={nupic}/>
        </div>
        <div className="loginText">
        </div>
      </div>
    </div>
  );
}

export default Login;
