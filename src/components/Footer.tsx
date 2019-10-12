import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

export const BorderDiv = styled.div`
border: 1px solid blue;
`;

export default function Footer() {
  return (
    <BorderDiv>
      <Link to="/">
        <h1>I am a Footer</h1>
      </Link>
    </BorderDiv>
  )
}
