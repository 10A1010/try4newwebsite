import React from "react";
import HomeScreen from '../bookpageAM/HomeScreen';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const BookPage = () => {
  return (
    <Row  >
    <Col></Col>
    {/* <Col md={6}>
      <Image src={product.image} alt={product.name} fluid></Image>
    </Col>
    <Col md={3}> */}
    <Col  md={10}  xs={{ span: 3, offset: 4 }}><br></br><br></br><br></br><br></br>
        {/* <ListGroup.Itm> */}
        <HomeScreen />
        {/* <h2>{product.name}</h2> */}
        {/* </ListGroup.Item> */}
        {/* <ListGroup.Item>Description: {product.description}</ListGroup.Item> */}
      </Col>
      </Row>
  )};

export default BookPage;
