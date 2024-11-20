import React, {Component} from 'react';

class MainImage extends Component{
    render(){
        return(
            <div
            className="elsa-background"
            style={{
              backgroundImage: `url(assets/images/bak1.jpg)`
            }}
          >
                    <div className="elsa-main-text">
                       Í einfaldleikanum hvílir fegurðin, nægjusemin.
                       Fjölbreytileiki sem mér hefði ekki órað fyrir.
                       Ég finn værðina, finn hvað hún nærir mig.
                    </div>
                </div>
        )
    }
}


export default MainImage;


