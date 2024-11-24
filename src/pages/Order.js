import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import WhoAreWe from "../home/WhoAreWe" 
class Order extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        <WhoAreWe />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Order;
