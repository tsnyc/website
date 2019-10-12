import { Link } from "gatsby";
import React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';

export const BorderDiv = styled.div`
border: 1px solid red;
`;

export default function Header() {
  return (
    <BorderDiv>
      <Link to="/">
        <h1>header</h1>
      </Link>
    </BorderDiv>
  )
}
