import React from "react";
import ItemsData from '../Data/ItemsData';
import {Link} from 'react-router-dom';

const Items = () => {
    //could probs map these - look at later
    return (
                <div className="itemsContainer">
                    {ItemsData.map((item, index) => (
                        <Link to={`/Items/${item.id}`} key={item.id} >
                        <img className="itemThumb" src={item.img} alt={item.name}/>
                        </Link>
                    ))}
                </div>
    );
};

export default Items