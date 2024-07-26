import React from "react";
import '../Styles/Home.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Nav, Link } from 'react-router-dom';  // Import Nav and Link from react-router-dom
import img1 from '../Images/Coupen4.png';
import img2 from '../Images/cupon3.jpg';
import menu from '../Images/baby burger.jpeg';
import store from '../Images/MACDONALDS-FRIES-1109.jpeg';
import combo from '../Images/combo pack3.jpeg';
import chikenburger from '../Images/chickenburger.jpeg';
import '../Styles/Discovery.css';


function Home() {
  return (
    <div>
      <section className="Banner">
        <Container>
          <Row className="py-4"> </Row>
        </Container>
      </section>
      
      <section className="Coupons">
        <Row style={{ color: 'white', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>
          <h2><b>Coupons & Offers</b></h2>
        </Row>
        <Container>
          <Row className="py-4">
            <Col md={6}>
              <div className="image-container">
                <img src={img1} style={{ width: '100%' }} alt="Coupon 1" />
                <a href="https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en&gl=US" className="overlay-button">Download the App</a>
              </div>
            </Col>
            <Col md={6}>
              <div className="image-container">
                <img src={img2} style={{ width: '100%' }} alt="Coupon 2" />
                <a href="https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en&gl=US" className="overlay-button">Download the App</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section>
        <Row className="py-4">
          <Col>
            <h3 style={{ color: 'blue', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Explore</h3>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={menu} style={{ height: '150px' }} alt="Menu" />
              <Card.Body>
                <Card.Title>BABY BURGER</Card.Title>
                <Card.Text>Explore our range of delicious food, delivered in 30 minutes!</Card.Text>
                <Button as={Link} to="/discovery" variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={store} style={{ height: '150px' }} alt="Store" />
              <Card.Body>
                <Card.Title>FRIES</Card.Title>
                <Card.Text>Explore our range of delicious food, delivered in 30 minutes!</Card.Text>
                <Button as={Link} to="/discovery" variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={chikenburger} style={{ height: '150px' }} alt="Chicken Burger" />
              <Card.Body>
                <Card.Title>CHICKEN BURGER</Card.Title>
                <Card.Text>Explore our range of delicious food, delivered in 30 minutes!</Card.Text>
                <Button as={Link} to="/discovery" variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={combo} style={{ height: '150px' }} alt="Combo" />
              <Card.Body>
                <Card.Title>COMBO PACK</Card.Title>
                <Card.Text>Explore our range of delicious food, delivered in 30 minutes!</Card.Text>
                <Button as={Link} to="/discovery" variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Home;
