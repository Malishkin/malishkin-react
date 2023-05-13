import { useReducer } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {

    const addItemHandler = (item) => { };
    const removeItemHandler = (id) => { };
    const cartContext ={
        items: [],
        totalAmount: 0,
        addItemHandler: addItemHandler,
        removeItemHandler: removeItemHandler,
    }
    return <CartContext.Provider value={ cartContext }>
        {props.children}
    </CartContext.Provider>  
};

export default CartContextProvider;