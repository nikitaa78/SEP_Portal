import React, { Component } from 'react';
import './Actives.css';
import NavBar from '../NavBar.js';
import ActiveBlock from './ActiveBlock';
import ActiveProfile from './ActiveProfile';
import {Redirect, Link} from 'react-router-dom';


import { db } from '../firebaseDB';

class Actives extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      loading: true,
    }
  }

  linkToActive(user) {
    return function() {
      console.log("clicked on", user);
      console.log(user.year);
      this.props.history.push({
        pathname: '/active',
        state: {year: user.year}
      });
    }
  }

  componentDidMount(){
    let array = []
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
          // array.push(doc)
          console.log(doc.id, " => ", doc.data());
          function link(user) {
            return function() {
              this.props.history.push({
                pathname: '/active',
                state: {year: user.year}
              });
            }
          }
          
          let func = link(doc.data());

          array.push(<ActiveBlock key={doc.id} user={doc.data()} onClick={() => func} />);

        });

        console.log("array", array);
        this.setState({userData: array, loading: false});
    });
  }

  render() {
    const {userData, loading} = this.state;

    // let userData = []
    // users.map((user) => {
    //   userData.push(<ActiveBlock key={user} user={user.data()} onClick={() => this.linkToActive(user)()}/>)
    // });

    return loading ? (
      <body>
        <NavBar />
        <div>
          Loading...
        </div>
      </body>
    ) : (
      <body>
        <NavBar />
        <div>
          {userData}
        </div>
      </body>
    );
  }
}

export default Actives;
