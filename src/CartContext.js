import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const Provider = (props) => {
    const [cart, setCart] = useState(
        {id0001: 0,
        id0002: 0,
        id0003: 0,
        id0004: 0,
        id0005: 0,
        id0006: 0,
        id0007: 0,
        id0008: 0
        }
    );
//next iteration do it so that you just add id and number if needed
//rather than having id: 0 8 times

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}