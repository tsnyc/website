import { Link } from "gatsby";
import React from "react";

const HomeNav = () => (
  <div className="home-nav">
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
  </div>
)

export default HomeNav;
