import { Link } from "gatsby";
import logo from '../images/ts-nyc-logo.png';
import React from "react";
import styled, { createGlobalStyle, css } from 'styled-components';
import Announcement from './Announcement'

export const HeaderStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
      <div className="logo-container">
          <img src={logo} width="300"/>
        </div>
      </Link>
      <Announcement/>
    </HeaderStyle>
  )
}
