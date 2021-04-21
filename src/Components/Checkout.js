import React, { useContext } from "react";
import ItemsData from '../Assets/ItemsData';
import { CartContext } from '../CartContext';

const Checkout = (props) => {
    
    const [cart, setCart] = useContext(CartContext);

    const getCheckoutObjs = () => {
        let cartItems = Object.keys(cart);
        const objs = [];
        cartItems.forEach(element => {
            if(cart[element] !== 0){
                let obj = {}
                obj['id'] = element;
                obj['quantity'] = cart[element];
                let details = ItemsData.find(x => x.id === element);
                obj['name'] = details.name;
                obj['price'] = details.price;
                obj['img'] = details.img;
                objs.push(obj);
            }
        });
        return objs;
    };

    let checkoutObjs = getCheckoutObjs();

    const getTotal = () =>{
        let sum = 0;
        for(let i=0; i < checkoutObjs.length; i++){
            sum = sum + checkoutObjs[i].price * checkoutObjs[i].quantity;
        }
        return sum
    };

    let total = getTotal();

    function addToCart(item){
        setCart({...cart, [item.id]: cart[item.id] + 1});
    };

    function removeFromCart(item){
        if(cart[item.id] === 0){
        } else {
            setCart({...cart, [item.id]: cart[item.id] - 1});
        }
    };

    return(
        <div className="checkoutContainer">
            <div className="checkoutContent">
            <h2>Your Basket</h2>
                {checkoutObjs.map((item, index) => (
                    <div className="checkoutItemParent">
                        <img className="checkoutItemThumb" src={item.img} alt={item.name}></img>
                        <p className="checkoutItemName">{item.name}</p>
                        <p className="checkoutItemPrice">£{item.price}.00</p>
                        <div className="quantityWrapper">
                            <button class="minusQuantity" onClick={(e) => removeFromCart(item)}>-</button>
                            <p className="checkoutItemQuantity">{item.quantity}</p>
                            <button class="addQuantity" onClick={(e) => addToCart(item)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="totalPriceContainer">
                <p><span className="pink">Total Price:</span> £{total}.00</p>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    )
};

export default Checkout;