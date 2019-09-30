import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeNav from "./HomeNav";

class Layout extends React.Component {

  sendWhichProps(props) {
    
  }

  render() {
    return (
      <div className='app'>
      <Header />
      {/* if statements here to render content depending on click event listener */}
      {/* the props sent to HomeNav will come from meetup api */}
      <HomeNav content={this.props}/>
      <Footer/>
      </div>
    )
  }
}

export default Layout