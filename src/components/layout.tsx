import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";

export default function Layout() {
  const state = useState("");
  const text = state[0];
  const setText = state[1];

  return (
  <div className="app">
    <Header />
    {/* the props sent to HomeNav will come from meetup api */}
    <HomeNav />
      <input  type="text" value = {text} onChange={e => setText(e.target.value)}/>
    <Footer />
  </div>
  )
}

