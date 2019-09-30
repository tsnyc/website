import { Link } from "gatsby";
import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <Link to="/">
          <h1>I am a NotFound</h1>
        </Link>
      </div>
    );
  }
}

export default NotFound;
