import React, { useEffect, useState, useContext } from "react";
import Cart from './Cart';
import { CartContext } from '../CartContext';

const CartLogic = (props) => {
  const [cart, setCart] = useContext(CartContext);
//Each time you call setCart() the entire App will hear these changes
    let numItem = props.addItems;
    let itemId = 'id' + props.itemId;
    console.log(numItem, itemId, cart[itemId], cart);

    
    function updateCart(){
        if(cart[itemId] !== numItem){
            setCart({...cart, [itemId]: numItem})
        }
    }

    useEffect(() => {
        updateCart();
    });

  return(

  )
}

export default CartLogic;