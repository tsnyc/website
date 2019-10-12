import { Link } from "gatsby";
import React from "react";

export default function HomeNav() {
  return (
    <div className="home-nav">
      <Link to="/">
        <h1>Nav Items from props aka meetup API</h1>
      </Link>
    </div>
  )
}
