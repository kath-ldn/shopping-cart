import React, { useContext } from "react";
import ItemsData from '../Assets/ItemsData';
import { CartContext } from '../CartContext';

const Item = ({ match }) => {

    const [cart, setCart] = useContext(CartContext);

    const getObject = () => {
        let object = ItemsData.find(x => x.id === match.params.id);
        return object;
    };

    let object = getObject();

    function addToCart(){
        setCart({...cart, [object.id]: cart[object.id] + 1});
    };

    function removeFromCart(){
        if(cart[object.id] === 0){
            } else {
                setCart({...cart, [object.id]: cart[object.id] - 1});
            }
    };

    return (
        <div className="itemContainer">
            <div className="itemDetail">
                <img src={object.img} alt={object.name}/>
                <div className="itemText">
                    <p className="singleItemTitle">{object.name}</p>
                    <p className="singleItemPrice">£{object.price.toFixed(2)}</p>
                    <div className="quantityWrapper">
                        <p>In cart: </p>
                        <button class="minusQuantity" onClick={removeFromCart}>-</button>
                        <p>{cart[object.id]}</p>
                        <button  class="addQuantity" onClick={addToCart}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;