import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import MainImage  from '../components/MainImage';

class SonnHomePage extends Component{
    render(){
        
        return(
            <div className="elsa-full-height">
                <NavBar/>
                <MainImage />
            </div>
        )
    }
}


export default SonnHomePage;