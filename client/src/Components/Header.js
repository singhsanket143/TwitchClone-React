import React from "react";
import { Link } from "react-router-dom";

import "../CSS/index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="ui pointing menu">
        <Link to="/" className="active item">
          My Twick
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
