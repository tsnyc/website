import React from "react"
import { Link } from "gatsby"
class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <Link to="/"><h1>I am a Footer</h1></Link>
      </div>
    )
  }
}

export default Footer