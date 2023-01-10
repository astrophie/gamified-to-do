import React from "react";
import { createContext, useState, useEffect } from "react";
import { productsArr, getProductData } from "./ProductsStore";

export const CartContext = createContext({
    items: [],
    getProdQuant: () => {},
    addOne: () => {},
    removeOne: () => {},
    getTotalCost: () => {}
});


// items have properties {id: , quantity: }
function CartProvider({children}) {
    
    const [cartItems, setCartItems] = useState([]);

    function getProdQuant(id) {
        // get quantity only if not undefined
        const prod = cartItems.find(product => product.id === id)

        // item not bought
        if (prod === undefined) {
            return 0;
        } else {
            return prod.quantity;
        }

    }

    function addOne(id) {
        // get quantity only if not undefined
        const quantity = getProdQuant(id);

        // already bought one
        if (quantity > 0) {
            setCartItems(
                cartItems.map(
                    product => product.id===id // if 
                    ? {...product, quantity: product.quantity+1} 
                    : product // else
                    )
            )
        } else {
            setCartItems(
                [...cartItems, {id: id, quantity: 1}]
            )
        }
    }

    function removeOne(id) {
        let quantity = getProdQuant(id);

        if (quantity === 1) {
            setCartItems(
                cartItems => cartItems.filter(current => {return current.id != id;})
            )
        } else {
            setCartItems(
                cartItems.map(
                    product => product.id===id // if 
                    ? {...product, quantity: product.quantity-1} 
                    : product // else
                    )
            )
        }
    }

    function getTotalCost(){
        let total = 0;
        cartItems.map((cartCurr) => {
            const productData = getProductData(cartCurr.id);
            total +=  (productData.price * cartCurr.quantity)
        });

        return total;
    }
    
    const contextVal = {
        items: cartItems,
        getProdQuant,
        addOne,
        removeOne,
        getTotalCost,
        setCartItems
    }

    // save to local
    const saveLocal = () => {

        if(cartItems.length > 0) {
            localStorage.setItem("items", JSON.stringify(cartItems));
        } else {
            localStorage.setItem("items", JSON.stringify([]));
        }

        localStorage.setItem("tasks", JSON.stringify(cartItems));
    } 

    const getLocal = () => {

    if (localStorage.getItem("items") === null) {
        localStorage.setItem("items", JSON.stringify([]));
    } else {
        let localItems = JSON.parse(localStorage.getItem("items"));
        setCartItems(localItems);
    }
    }

    // run once at beginning
    useEffect(() => {
        getLocal();
    }, [])

        
    useEffect(() => {
        saveLocal();
    }, [cartItems])

    return (
        <CartContext.Provider value={contextVal}>
            {children}
        </CartContext.Provider>
    )

};

export default CartProvider;