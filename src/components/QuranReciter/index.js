import React from "react";
import Icon1 from "../../images/svg-1.svg";
import HomeScreen from '../quranpage/HomeScreen';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import {
  QuranContainer,
  QuranH1,
  QuranH2,
  QuranWrapper,
  QuranCard,
  QuranIcon,
  QuranP,
} from "./QuranElements";
const Quran = () => {
  return (
    <Row  >
    <Col></Col>
    {/* <Col md={6}>
      <Image src={product.image} alt={product.name} fluid></Image>
    </Col>
    <Col md={3}> */}
    <Col  md={10}  xs={{ span: 3, offset: 4 }}>
        {/* <ListGroup.Itm> */} <br></br><br></br><br></br><br></br>
        <HomeScreen />
        {/* <h2>{product.name}</h2> */}
        {/* </ListGroup.Item> */}
        {/* <ListGroup.Item>Description: {product.description}</ListGroup.Item> */}
      </Col>
      </Row>
  )};

export default Quran;
