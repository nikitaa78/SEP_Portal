import React, { Component } from 'react';
import './Actives.css';
import NavBar from '../NavBar.js';
import ActiveBlock from './ActiveBlock';


import { db } from '../firebaseDB';

class Actives extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      loading: true,
    }
  }

  componentDidMount(){
    let array = []
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
          let user = doc.data();
          let firstName = user.name.first;
          let lastName = user.name.last;
          let name = firstName + " " + lastName;
          let email = user.email;
          let phone = user.phone;
          let pledgeClass = user.pledgeClass;

          array.push(<ActiveBlock key={doc.id} name={name} email={email} phone={phone} pledgeClass={pledgeClass}/>)
            // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", user);
        });

        console.log(array);
        this.setState({userData: array, loading: false});
    });
  }

  render() {
    const {userData, loading} = this.state;
    console.log(loading);
    console.log(userData);

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


    // var users = db.collection("users");
    // var jen = users.doc("JenniferLu");
    //
    // jen.get().then(function(doc) {
    //   console.log("Jennifer data:", doc.data());
    // }).catch(function(error) {
    //   console.log("Error getting doc:", error);
    // });


  }
}

export default Actives;
