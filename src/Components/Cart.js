import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';
import cartImg from '../Data/Imgs/cart.png';
import { CartContext } from '../CartContext';

const Cart = (props) => {
  const navStyle = {
      color: 'white',
      textDecoration: 'none'
  };

  const[cartCount, updateCartCount] = useState();

  const [cart, setCart] = useContext(CartContext);

  function updateCartNumber(count){
    if(cartCount === count) {
    } else {
      updateCartCount(count);
    }
  }

  function countItems(){
    let count = 0
  for(const key of Object.keys(cart)) {
    count = count + cart[key];
  }
  console.log(count)
  updateCartNumber(count);
  return count
}

  countItems();

  return(
    <div id="cartContainer">
            <Link style={navStyle} to='/cart'>
                <div className="cartDiv">
                    <img className="cartImg" src={cartImg} alt='cart'/>
                    <p className="cartNumber">{cartCount}</p>
                </div>
            </Link>
    </div>
  )
}

export default Cart;