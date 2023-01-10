import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import { productsArr } from "../ProductsStore";
import ProductCard from "./ProductCard";

function Store({coins, setCoins}){

  return (
    <Container>
        <header><h1 className="p-3">store</h1></header>
        <header><h3>Coins: {coins}$</h3></header>
        <Row xs={1} md={3} className="g-4" align="center">
            {productsArr.map((product, idx) => (
                <Col align="center" key={idx}>
                    <ProductCard 
                    product={product} coins={coins} setCoins={setCoins}>
                    </ProductCard>
                </Col>
            ))}
        </Row>
    </Container>
    )
}

export default Store;