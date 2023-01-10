import React from "react";
import Button from "react-bootstrap";
import { CartContext } from "../CartContext";
import {useContext} from "react"

import { getProductData } from "../ProductsStore";

function CartProduct ({id, quantity}) {
    const cart = useContext(CartContext);
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <hr></hr>
        </>
    )

}

export default CartProduct;