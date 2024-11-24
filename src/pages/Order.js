import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import WhoAreWe from "../home/WhoAreWe" 
import Funfact from '../components/Funfact'
class Order extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(assets/images/bak2.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Panta</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Heim</a>
                    </li>
                    <li>Hafa samband</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <WhoAreWe />

        {/* Footer */}
        <Footer />
        <Funfact />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Order;
