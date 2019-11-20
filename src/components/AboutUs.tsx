import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'

export const AboutContainer = styled.div`
@media (min-width: 576px) {
  margin: 2%
}
`;
export const OrganizerCard = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
`;
export const OrganizerList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const organizers = [
  {
    name: "1",
    title: "title",
    occupation: "occupation",
    summary: "summary",
    twitterHandle: "@handle",
    twitterUrl: "",
    photoUrl: ""
  },
  {
    name: "2",
    title: "title",
    occupation: "occupation",
    summary: "summary",
    twitterHandle: "@handle",
    twitterUrl: "",
    photoUrl: ""
  },
  {
    name: "3",
    title: "title",
    occupation: "occupation",
    summary: "summary",
    twitterHandle: "@handle",
    twitterUrl: "",
    photoUrl: ""
  },
  {
    name: "4",
    title: "title",
    occupation: "occupation",
    summary: "summary",
    twitterHandle: "@handle",
    twitterUrl: "",
    photoUrl: ""
  }
]

const listOrganizers = (organizers) => {
  return organizers.map((organizer) => {
    let { name, title, occupation, summary } = organizer;
    console.log(name, title)
    return <li>
      <OrganizerCard>
        <div className="organizer-photo">photo</div>
        <div className="organizer-copy">
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="occupation">
            <p>{occupation}</p>
          </div>
          <div className="summary">
            <p>{summary}</p>
          </div>
        </div>
        <div className="twitter-icon">tweet</div>
      </OrganizerCard>
    </li>
  })
}

export default function AboutUs() {
  return (
    <AboutContainer>
      <div className="about-copy"></div>
      <h2>What we're about</h2>
      <p>TypeScript is a popular programming language which adds static types to JavaScript. It can be used across the whole JavaScript ecosystem, and works well with tools such as React, Angular and NodeJS. TypeScript is JavaScript that scales.</p>
      <p>Come join us to learn about TypeScript, improve your understanding of the language, or share what you've learned. All levels of skill and experience with TypeScript are welcome.</p>
      <p>Chat with us in the #ts-nyc channel of the <a href="https://discord.gg/ZjvtBsh" target="_blank">TypeScript Community Discord</a> (https://discord.gg/ZjvtBsh).</p>
      <p>Code of conduct: We follow the JSConf <Link to="/code-of-conduct">code of conduct.</Link></p>
      <div className="oranizer-container">
        <h3>Organizers</h3>
        <OrganizerList>
          {listOrganizers(organizers)}
        </OrganizerList>
      </div>
    </AboutContainer>
  )
}
