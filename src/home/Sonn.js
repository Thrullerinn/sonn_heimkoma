import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import MainImage  from '../components/MainImage';
import SonnBook from './SonnBook';

class Sonn extends Component{
    render(){
        
        return(
            <div className="elsa-full-height">
                
                <NavBar/>
                <MainImage />
                <SonnBook />

            </div>
    
        )
    }
}
export default Sonn;