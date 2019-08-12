import React from "react"
import { Link } from "gatsby"

class MeetupList extends React.Component {

  render() {
    return (
      <div className="meetup-list">
        <Link to="/"><h1>I am a MeetupList</h1></Link>
      </div>
    )
  }
}

export default MeetupList