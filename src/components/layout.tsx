import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Header from "./Header";
import Announcement from "./Announcement";
import HomeNav from "./HomeNav";
import Footer from "./Footer";


export const LayoutStyle = styled.div`
    border: 1px solid red;
    width: 100%;
    position: relative;
    `;


export default function Layout() {
return (
    <LayoutStyle>
        <Header />
        <Announcement />
        <HomeNav />
        <Footer />
      </LayoutStyle>
  )
}

