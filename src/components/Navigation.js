import React from 'react';
import logo from '../beer.svg';

const Navigation = () => {
    return ( 
        <nav>
           <img src={logo} className="App-logo" alt="logo"/>
            <a>Recipes</a> {' '}
            <a>Tools</a>
        </nav>
     );
}
 
export default Navigation;