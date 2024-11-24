import React, {Component} from 'react';

class MainImage extends Component{
    render(){
        return(
            <div
            className="elsa-background"
            style={{
              backgroundImage: `url(assets/images/bak2.jpg)`
            }}
          >
                    <div className="elsa-main-text">
                       Í einfaldleikanum hvílir fegurðin, nægjusemin.<br />
                       Fjölbreytileiki sem mér hefði ekki órað fyrir.<br />
                       Ég finn værðina, finn hvað hún nærir mig.
                    </div>
                </div>
        )
    }
}


export default MainImage;


