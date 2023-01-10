import React from "react";
import {Card, Button, Form, Row, Col} from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext, useEffect } from "react"

// props.product
function ProductCard({coins, setCoins, product}) {

    const cart = useContext(CartContext);
    const productQuantity = cart.getProdQuant(product.id);
    console.log(cart.items);

    const handleAdd = () => {
        if (coins >= product.price) {
            cart.addOne(product.id);
            setCoins(coins-product.price);
        }
    }


    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
                { productQuantity > 0 ?
                <>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">Bought: {productQuantity}</Form.Label>
                        <Col sm="6">
                            <Button sm="6" className="mx-2" onClick={handleAdd}>+</Button>
                        </Col>
                    </Form>
                </>
                
                : <Button variant="secondary" onClick={handleAdd}>add to cart</Button>
            }
            </Card.Body>
        </Card>
    )

}

export default ProductCard;