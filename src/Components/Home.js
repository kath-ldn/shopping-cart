import React from "react";
import boxes from '../Assets/Imgs/boxes.jpg';
import ordinary from '../Assets/Imgs/ordinary.jpg'
import {Link} from 'react-router-dom';

const Home = () => {
    const navStyle = {
        color: 'rgb(40, 40, 40)',
        textDecoration: 'none'
    };

    return(
        <div className="homeContainer">
            <Link style={navStyle} to='/items'>
                <div className="homeContent">
                    <img className="skincareImg" src={ordinary} alt='Dog with Boxes'/>
                    <div className="skincareAd">
                        <p>Discover <span className="pink">20% off</span> skincare!</p>
                    </div>
                </div>
            </Link> 
            <Link style={navStyle} to='/items'>   
            <div className="homeContent">
                <div className="boxesTxt">
                    <p>Our boxes are <span className="pink">packed with care</span> &#38; filled with at least 6 of the <span className="pink">latest products</span> to try.</p>
                </div>
                <img className="boxesImg" src={boxes} alt='Dog with Boxes'/>
            </div>
            </Link>
        </div>
    )
};

export default Home;
