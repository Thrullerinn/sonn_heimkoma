import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BooksLayout extends Component{
    render(){
        
        return(
            <div className="elsa-bok-variety" >
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/authorpage`}>
                    <img className="elsa-bok-mynd elsa-front"src={`assets/images/elsagella1.jpg`} alt="" 
                    />
                    </Link>
                </div>
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/sonnbok`}>
                        <img className="elsa-bok-mynd elsa-front"src={`assets/images/sonn_bok.jpg`} alt="" />
                    </Link>
                </div>
                <div>
                    <Link to={`${process.env.PUBLIC_URL}/sonnheimkomabok`}>
                        <img className="elsa-bok-mynd elsa-front"src={`assets/images/sonn_heimkoma_bok.jpg`} alt="" />
                    </Link>
                </div>
            </div>
    
        )
    }
}
export default BooksLayout;