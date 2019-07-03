import React from 'react';
import logo from '../beer.svg';

const Navigation = () => {
    return ( 
        <nav>
           <img src={logo} className="App-logo" alt="logo"/>
           <ul className="nav-links">
            <li>Recipes</li>
            <li>Tools</li>
            </ul> 
        </nav>
     );
}
 
export default Navigation;