import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";

const Layout = () => (
  <div className="app">
    <Header />
    {/* the props sent to HomeNav will come from meetup api */}
    <HomeNav />
    <Footer />
  </div>
)

export default Layout;
