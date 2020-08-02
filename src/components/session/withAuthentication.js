import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          authUser: null,
        };
        console.log("in withAuthentication, state is:", this.state);
      }

      componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
          authUser => {
            authUser
              ? this.setState({ authUser })
              : this.setState({ authUser: null });
          },
        );
      }

      componentWillUnmount() {
        this.listener();
      }

      render() {
        console.log("rendering, state authUser:", this.state.authUser);
        return (
          <AuthUserContext.Provider value={this.state.authUser}>
            <Component {...this.props} />
          </AuthUserContext.Provider>
        );
      }
    }
    return withFirebase(WithAuthentication);
  };

  export default withAuthentication;