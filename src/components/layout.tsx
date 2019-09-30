import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";

class Layout extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        {/* the props sent to HomeNav will come from meetup api */}
        <HomeNav content={this.props} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
