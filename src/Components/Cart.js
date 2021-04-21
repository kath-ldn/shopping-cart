import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import cartImg from '../Assets/Imgs/cart.png';
import { CartContext } from '../CartContext';

const Cart = (props) => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const[cartCount, updateCartCount] = useState();

    const [cart] = useContext(CartContext);

    function updateCartNumber(count){
        if(cartCount === count) {
        } else {
            updateCartCount(count);
        }
    };

    function countItems(){
        let count = 0
        for(const key of Object.keys(cart)) {
            count = count + cart[key];
        }
        updateCartNumber(count);
        return count
    };

    countItems();

    return(
        <div id="cartContainer">
            <Link style={navStyle} to='/cart'>
                    <img className="cartImg" src={cartImg} alt='cart'/>
            </Link>
            <p className="cartNumber">{cartCount}</p>
        </div>
    )
};

export default Cart;