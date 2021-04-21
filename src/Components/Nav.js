import React from "react";
import { Link } from 'react-router-dom';
import Cart from './Cart'

const Nav = () => {

    const navStyle = {
        color: 'rgb(40, 40, 40)',
        textDecoration: 'none'
    };

    return(
        <div className="nav-wrapper">
        <nav>
            <Link style={navStyle} to='/'>
                <h1>Beauty <span className="pink">Box</span></h1>
            </Link>
            <ul className="nav-links">    
                <Link style={navStyle} to='/items'>
                    <li>Shop</li>
                </Link>
            </ul>
            <Cart totalItems={0}/>
        </nav>

<div className="homeSubHeader">
<h2>We are Beauty Box</h2>
<p>Your destination for curated beauty products &#38; boxes.</p>
</div>
</div>
  )
};

export default Nav;