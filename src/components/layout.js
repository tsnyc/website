import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";
import layout from "../styles/layout.css";

export default function Layout() {
  return (
  <div className="layout">
    <Header />
    {/* the props sent to HomeNav will come from meetup api */}
    <HomeNav />
    <Footer />
  </div>
  )
}

