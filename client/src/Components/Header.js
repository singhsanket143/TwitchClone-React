import React from "react";
import { Link } from "react-router-dom"; // Used in place of anchor tag in order to achieve SPA

import "../CSS/index.css";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <div className="ui pointing menu">
        <Link to="/" className="active item">
          <b>My Twick</b>
          <i style={{ color: "purple" }} className="podcast icon" />
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
