import React from "react"
import { Link } from "gatsby"

class FaqAccordion extends React.Component {

  render() {
    return (
      <div className="faq-accordion">
        <Link to="/"><h1>I am a Accordion</h1></Link>
      </div>
    )
  }
}

export default FaqAccordion