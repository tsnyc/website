import React from "react"
import { Link } from "gatsby"

class MeetupLanding extends React.Component {

  render() {
    return (
      <div className="meetup-landing">
        <Link to="/"><h1>I am a MeetupLanding</h1></Link>
      </div>
    )
  }
}

export default MeetupLanding