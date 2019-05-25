import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../Actions";
import "../CSS/index.css";
class GoogleAuth extends React.Component {
  // state = { isSignedIn: null }; // Was used without redux

  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); // To get GAPI instance of frontend
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // Update the state using setState but used without redux
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); // Event listener that gets invoked on auth change
        });
    });
  };

  onAuthChange = signedIn => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // Gets invoked on event emission
    if (signedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); // Came from the connect call for the Action Creator
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
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button
          onClick={this.onSignOut}
          className="GoogleAuthButton ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignIn}
          className="GoogleAuthButton ui green google button"
        >
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn: signIn, signOut: signOut }
)(GoogleAuth);
