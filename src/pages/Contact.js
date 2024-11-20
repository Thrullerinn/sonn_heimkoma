import React, { Component } from "react";
import NavBar from "../components/NavBar";
class Contact extends Component {
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
            backgroundImage: `url(assets/images/bak1.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Panta</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">


        <div className="conact-section">
            <div className="container">
              <div className="row">

                Bókin kostar 4000 kr. og verður send með pósti heim að þínum dyrum.

                <br />Hægt er að fá hana senda til útlanda að viðbættum flutningskostnaði, 500 kr.

                <br />Pöntunin fer fram með því að fylla út pöntunarformið hér að neðan og millifæra á eftirfarandi reikning:

                <br />Reikningur: 0111-05-010493

                <br />Kennitala: 020477-2969

              </div>
            </div>
          </div>
          <br />
          <br />


          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Upplýsingar</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map"/>
                        </span>
                        <span className="text">
                          <span>
                            Elsa Steinunn Halldórsdóttir
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:+3548529707">8529707</a>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:elsahalldorsdottir@gmail.com">elsahalldorsdottir@gmail.com</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Skilaboð</h3>
                    <form id="contact-form">
                      <div className="row row-10">
                        <div className="sonn-checkboxes" >
                          <label>
                            <input type="checkbox" />
                            Sönn
                          </label>
                          <label>
                            <input type="checkbox" />
                            Sönn Heimkoma
                          </label>
                      </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Nafn"
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Netfang"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Skilaboð"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <button>Senda</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}
      </div>
    );
  }
}

export default Contact;
