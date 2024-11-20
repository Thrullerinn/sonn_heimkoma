import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import MainImage  from '../components/MainImage';
import BooksLayout from './BooksLayout';

class SonnHomePage extends Component{
    render(){
        
        return(
            <div>
                
                <NavBar/>
                <MainImage />
                <BooksLayout />

            </div>
        )
    }
}


export default SonnHomePage;