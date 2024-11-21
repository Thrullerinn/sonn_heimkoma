import React, {Component} from 'react';
import SonnBook from './SonnBook';
import SonnHeimkomaBook from './SonnHeimkomaBook';
import Author from "./Author"
import MainImage  from '../components/MainImage';

class WhoAreWe extends Component{
    render(){
        
        return(
            <div>
            <MainImage />
            <div className="who-are-we">
                <SonnBook />
                <SonnHeimkomaBook />
                <Author />
            </div>

            </div>
    
        )
    }
}
export default WhoAreWe;