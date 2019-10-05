import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>header</h1>
      </Link>
    </div>
  )
}
