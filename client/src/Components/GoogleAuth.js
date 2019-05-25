import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../Actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); // To get GAPI instance of frontend
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // Update the state using setState
          this.auth.isSignedIn.listen(this.onAuthChange); // Event listener that gets invoked on auth change
        });
    });
  };

  onAuthChange = signedIn => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // Gets invoked on event emission
    if (signedIn) {
      this.props.signIn(); // Came from the connect call for the Action Creator
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui green google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
  null,
  { signIn: signIn, signOut: signOut }
)(GoogleAuth);
