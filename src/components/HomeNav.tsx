import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components'

export const BorderDiv = styled.div`
border: 1px solid green;
`;

export default function HomeNav() {
  return (
    <BorderDiv>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
    <Link to="/">
      <h1>Nav Items from props aka meetup API</h1>
    </Link>
  </BorderDiv>
  )
}
