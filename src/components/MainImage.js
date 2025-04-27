import React, {Component} from 'react';

class MainImage extends Component{
    render(){
        return(
          <>
          
          <div className="elsa-container">
            <div
            className="elsa-mainpage"
          >
            <a href="/#/about-us">
              <img className="elsa-bok-main-mynd"src={`assets/images/elsagella.jpg`} alt="" />
            </a>
            <div className="elsa-bok-main-texti">
              <div className="elsa-main-message-top">	&#9679;		&#9679;		&#9679;	</div>
              <div className="elsa-main-message-center">
                Bækur sem snerta hjörtu, viðra leyndarmál en 
                á sama tíma skilja eftir ávöxt, nýja sýn og
                visku sem heldur áfram að gefa löngu eftir 
                að lestri er lokið.
              </div>
              <div className="elsa-main-message-bottom">	&#9679;		&#9679;		&#9679;	</div>
            </div>
            <a href="/#/sonnbok">
              <img className="elsa-bok-main-mynd"src={`assets/images/sonn_bok.jpg`} alt="" />
            </a>
            <a href="/#/sonnheimkomabok">
              <img className="elsa-bok-main-mynd"src={`assets/images/sonn_heimkoma_bok.jpg`} alt="" />
            </a>
            </div>
          </div>
          <div className="elsa-main-name">
            <a href="/#/about-us">
              ELSA STEINUNN HALLDÓRSDÓTTIR
            </a>
          </div>
          </>
        )
    }
}


export default MainImage;


