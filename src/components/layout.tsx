import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";
import styled from 'styled-components'

export const LayoutFlex = styled.div`
display: flex;
flex-direction: column;
`;

export default function Layout() {
  return (
  <LayoutFlex>
    <Header />
    {/* the props sent to HomeNav will come from meetup api */}
    <HomeNav />
    <Footer />
  </LayoutFlex>
  )
}

