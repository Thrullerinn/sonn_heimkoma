import React, { Component } from "react";
import NavBar from "../components/NavBar";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

class Contact extends Component {
  
  constructor(props){
    super(props);
    this.form = React.createRef();
}

  render() {

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_u1gnewh",
          "template_oawdr1g",
          this.form.current,
          "THdSvFY8PC9AqYytT"
        )
        .then(
          (result) => {
            toast.success("Skilaboð send!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            document.getElementById("myForm").reset();
          },
          (error) => {
            toast.error("Eitthvað obbobobb í sendingunni!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    };


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
                <div className="col-lg-4 col-12"> 
                Bókin kostar 4000 kr. og verður send með pósti heim að þínum dyrum.

                <br /><br />Hægt er að fá hana senda til útlanda að viðbættum flutningskostnaði, 500 kr.

                <br /><br />Pöntunin fer fram með því að fylla út pöntunarformið hér að neðan og millifæra á eftirfarandi reikning:

                <br /><br />Reikningur: 0111-05-010493

                <br /><br />Kennitala: 020477-2969
                </div>
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
                    <form id="myForm" 
                      ref={this.form}  
                      onSubmit={sendEmail}>
                      <div className="row row-10">
                        <div className="sonn-checkboxes" >
                          <label>
                            <input 
                            name="sonn" 
                            type="checkbox" />
                            Sönn
                          </label>
                          <label>
                            <input 
                            name="sonnheimkoma"  
                            type="checkbox" />
                            Sönn Heimkoma
                          </label>
                      </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="name"
                            type="text"
                            placeholder="Nafn"
                            required
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="email"
                            type="email"
                            placeholder="Netfang"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
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
