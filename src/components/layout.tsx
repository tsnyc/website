import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Header from "./Header";
import Footer from "./Footer";

export const LayoutContainer = styled.div`
    width: 100%;
    position: relative;
    max-width: 600px;
    `;

export default function Layout(props) {
    let ComponentKey = Object.keys(props)[0];
    let Component = props[ComponentKey];

return (
    <LayoutContainer>
        <Header />
        {Component}
        <Footer />
      </LayoutContainer>
  )
}


