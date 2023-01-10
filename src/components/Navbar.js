import React from "react";
import { useState, useContext } from "react";
import { Button, Navbar, Modal } from "react-bootstrap";

// contexts & components
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function Navig(){
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const level = Math.floor(cart.getTotalCost()/451);

    return (
    <>
        <Navbar expands="sm">
            <Navbar.Brand href = "/" > breadwinner </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <a href="/">productivity</a>
                <a href="/store">store</a>
                <Button onClick={handleShow}>level {level+1}</Button>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>level {level+1}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>items owned</p>
                {cart.items.map((current, idx) => (
                    <CartProduct key={idx} id={current.id} quantity={current.quantity}></CartProduct>
                ))}
            </Modal.Body>

        </Modal>
    </>
    )
}

export default Navig;