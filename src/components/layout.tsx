import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";

export default function Layout() {
  return (
  <div className="container">
    <Header />
    {/* the props sent to HomeNav will come from meetup api */}
    <HomeNav />
    <Footer />
  </div>
  )
}

