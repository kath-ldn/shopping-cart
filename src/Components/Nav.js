import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

  return(
    <nav>
        <h3>Well Bay</h3>

        <ul className="nav-links">
            <Link style={navStyle} to='/'>
                <li>Home</li>
            </Link>
            <Link style={navStyle} to='/items'>
                <li>Items</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav;