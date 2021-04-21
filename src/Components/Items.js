import React from "react";
import ItemsData from '../Assets/ItemsData';
import {Link} from 'react-router-dom';

const Items = () => {

    return (
            <div className="itemsContainer">
                <div className="itemsContent">
                    {ItemsData.map((item, index) => (
                        <Link to={`/Items/${item.id}`} key={item.id} >
                        <img className="itemsThumb" src={item.img} alt={item.name}/>
                        </Link>
                    ))}
                </div>
            </div>
    );
};

export default Items