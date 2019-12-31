import React, { Component } from 'react';
import './Actives.css';
import ActiveBlock from './ActiveBlock';
import ActiveProfile from './ActiveProfile';
import {Redirect, Link} from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import { AuthUserContext, withAuthorization } from '../session';


// import { db } from '../components/firebase/firebase';

// class Actives extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       userData: [],
//       loading: true,
//     }
//   }

//   linkToActive(user) {
//     return function() {
//       console.log("clicked on", user);
//       console.log(user.year);
//       this.props.history.push({
//         pathname: '/active',
//         state: {year: user.year}
//       });
//     }
//   }

//   componentDidMount(){
//     let array = []
//     db.collection("users").get().then((querySnapshot) => {
//         querySnapshot.forEach(function(doc) {
//           // array.push(doc)
//           console.log(doc.id, " => ", doc.data());
//           function link(user) {
//             return function() {
//               this.props.history.push({
//                 pathname: '/active',
//                 state: {year: user.year}
//               });
//             }
//           }
          
//           let func = link(doc.data());

//           array.push(<ActiveBlock key={doc.id} user={doc.data()} onClick={() => func} />);

//         });

//         console.log("array", array);
//         this.setState({userData: array, loading: false});
//     });
//   }

//   render() {
//     const {userData, loading} = this.state;

//     // let userData = []
//     // users.map((user) => {
//     //   userData.push(<ActiveBlock key={user} user={user.data()} onClick={() => this.linkToActive(user)()}/>)
//     // });

//     return loading ? (
//       <div>
//         <NavBar />
//         <div>
//           Loading...
//         </div>
//       </div>
//     ) : (
//       <div>
//         <NavBar />
//         <div>
//           {userData}
//         </div>
//       </div>
//     );
//   }
// }

class Actives extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AuthUserContext.Consumer>
        {authUser => (
          <div>
            <Navbar imgURL={authUser.photoURL} />
            <div style={{padding: '0 100px'}}>
              <h1>Actives</h1>
              <p>Everyone deactivated the spring of 2020 :o</p>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
		);
	}
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Actives);