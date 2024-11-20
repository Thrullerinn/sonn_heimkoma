import React, {Component} from 'react';
import SonnBook from './SonnBook';
import SonnHeimkomaBook from './SonnHeimkomaBook';
import Author from "./Author"
import NavBar from '../components/NavBar';
import MobileMenu from '../components/MobileMenu';
import MainImage  from '../components/MainImage';

class WhoAreWe extends Component{
    render(){
        
        return(
            <>
            <NavBar/>
            <MainImage />
            <div className="who-are-we">
                <SonnBook />
                <SonnHeimkomaBook />
                <Author />
            </div>
            {/* Mobile Menu */}
            <MobileMenu/>

            </>
    
        )
    }
}
export default WhoAreWe;