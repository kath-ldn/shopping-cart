import React, { useState, useContext } from "react";
import ItemsData from '../Data/ItemsData';
import { CartContext } from '../CartContext';
import Cart from './Cart'

const Item = ({ match }) => {

const [cart, setCart] = useContext(CartContext);

const getObject = () => {
    let object = ItemsData.find(x => x.id === match.params.id)
    return object;
}

let object = getObject();

function addToCart(){
    setCart({...cart, [object.id]: cart[object.id] + 1});
}

function removeFromCart(){
   if(cart[object.id] === 0){
    } else {
        setCart({...cart, [object.id]: cart[object.id] - 1});
    }
}

    return (
        <div>
               <Cart totalItems={0}/>
                <div className="ItemDetail">
                    <img src={object.img} alt={object.name}/>
                    <p>{object.name} Box</p>
                    <p>£{object.price.toFixed(2)}</p>
                    <button onClick={addToCart}>+</button>
                    <p>In cart: {cart[object.id]}</p>
                    <button onClick={removeFromCart}>-</button>
                </div>
        </div>
    );
};

export default Item;