import React from "react";
import boxes from '../Data/Imgs/boxes.jpg'

const Home = () => {
  return(
    <div className="homeContainer">
      <h1>Welcome to Well Bay</h1>
      <p>Your number one destination for curated wellness boxes.</p>
      <img className="boxesImg" src={boxes} alt='Dog with Boxes'/>
    </div>
  )
}

export default Home;
