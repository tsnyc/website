import React from "react"
import { Link } from "gatsby"

class MeetupCard extends React.Component {

  render() {
    return (
      <div className="meetup-card">
        <Link to="/"><h1>I am a MeetupCard</h1></Link>
      </div>
    )
  }
}

export default MeetupCard