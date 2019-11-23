import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components'
import CardList from './CardList'

export const AboutContainer = styled.div`
@media (min-width: 576px) {
  margin: 2%
}
`;



const organizers = [
  {
    title: "Orta Therox",
    subtitle: "Organizer",
    summary: "Engineer on TypeScript",
    twitterHandle: "@handle",
    twitterUrl: "",
    imageUrl: ""
  },
  {
    title: "Jason Killian",
    subtitle: "Co-Organizer",
    summary: "Frontend-focused SWE at Palantir. TypeScript and React are my two most used tools. I've also helped maintain some open source TypeScript projects such as TSLint.",
    twitterHandle: "@handle",
    twitterUrl: "",
    imageUrl: ""
  },
  {
    title: "Dan Vanderkam",
    subtitle: "Co-Organizer",
    summary: "SWE at Sidewalk Labs. Fan of static types and React.",
    twitterHandle: "@handle",
    twitterUrl: "",
    imageUrl: ""
  },
  {
    title: "Kirill Cherkashin",
    subtitle: "Co-organizer",
    summary: "",
    twitterHandle: "@handle",
    twitterUrl: "",
    imageUrl: ""
  }
]



export default function AboutUs() {
  return (
    <AboutContainer>
      <div className="about-copy"></div>
      <h2>What we're about</h2>
      <p>TypeScript is a popular programming language which adds static types to JavaScript. It can be used across the whole JavaScript ecosystem, and works well with tools such as React, Angular and NodeJS. TypeScript is JavaScript that scales.</p>
      <p>Come join us to learn about TypeScript, improve your understanding of the language, or share what you've learned. All levels of skill and experience with TypeScript are welcome.</p>
      <p>Chat with us in the #ts-nyc channel of the <a href="https://discord.gg/ZjvtBsh" target="_blank">TypeScript Community Discord</a> (https://discord.gg/ZjvtBsh).</p>
      <p>Code of conduct: We follow the JSConf <Link to="/code-of-conduct">code of conduct.</Link></p>
      <div className="organizer-container">
        <h3>Organizers</h3>
        <CardList organizers={organizers}/>
      </div>
    </AboutContainer>
  )
}
