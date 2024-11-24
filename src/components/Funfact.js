import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Funfact extends Component {

  render() {
    
    return (
      <div>
      <div className="d-flex align-items-center">
      <div className="container">
          <div className="row">
          <div className=" elsa-social-blehh">
          <Link to='https://www.facebook.com/elsa.halldorsdottir' target="_blank" rel="noopener noreferrer" >
            <div><img className="elsa-social"src={`assets/images/fb.png`} alt="" /></div>
          </Link>
          <Link to='https://www.instagram.com/elsahalldorsdottir/' target="_blank" rel="noopener noreferrer" >
            <div><img className="elsa-social elsa-insta"src={`assets/images/instag.png`} alt="" /></div>
          </Link>
          </div>
          </div>
      </div>
      </div>
  </div>
    );
  }
}

export default Funfact;
