import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props)=>{
    const [cart ,setCart] = useState([])
    const value ={
        cart,setCart
    }
    return(
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;