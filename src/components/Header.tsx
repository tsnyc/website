import { Link } from "gatsby";
import logo from '../images/ts-nyc-logo.png';
import React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';

export const HeaderStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
      <div className="logo-container">
          <img src={logo} width="300"/>
        </div>
      </Link>
    </HeaderStyle>
  )
}
