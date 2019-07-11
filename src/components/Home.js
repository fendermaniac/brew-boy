import React from "react";
import "./Home.css";
import Card from './Card';

const Home = ({ breweries }) => {
  return (
    <div className="home-container">
      {breweries.map(brewery => {
        return ( 
        <Card id={brewery.id} name={brewery.name} street={brewery.street} city={brewery.city} state={brewery.state}/>
        )
       
      })}
    </div>
  );
};

export default Home;
