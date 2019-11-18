import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Header from "./Header";
import Announcement from "./Announcement";
// import HomeNav from "./HomeNav";
import Footer from "./Footer";

export const LayoutContainer = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    max-width: 600px;
    `;

export default function Layout(props) {
    let propsKey = Object.keys(props)[0];
    let propsComponent = props[propsKey];

return (
    <LayoutContainer>
        <Header />
        {propsComponent}
        <Footer />
      </LayoutContainer>
  )
}


