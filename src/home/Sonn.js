import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import MobileMenu from '../components/MobileMenu';
import MainImage  from '../components/MainImage';
import SonnBook from './SonnBook';

class Sonn extends Component{
    render(){
        
        return(
            <div>
                
                <NavBar/>
                <MainImage />
                <SonnBook />
                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
    
        )
    }
}
export default Sonn;