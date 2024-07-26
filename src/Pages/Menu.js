import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Styles/Menu.css';
import vegPizza from '../Images/baby burger.jpeg';
import nonvegBurger from '../Images/chickenburger.jpeg';
import dessert from '../Images/McFlurry-Oreo.png';

function Menu() {
  return (
    <div>
      <section className="nav2">
        <Container>
          <Row>
            <Col>
              <Nav className="link mr-auto">
                <Nav.Link as={Link} to="/veg" className="navLink">VEG BURGERS</Nav.Link>
                <Nav.Link as={Link} to="/nonVeg" className="navLink">NON VEG BURGERS</Nav.Link>
                <Nav.Link as={Link} to="/desserts" className="navLink">DESSERTS</Nav.Link>
                <Nav.Link as={Link} to="/coldDrink" className="navLink">COLD DRINKS</Nav.Link>
                <Nav.Link as={Link} to="/combo" className="navLink">COMBO PACK</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="menu">
        <Container>
          <Row className="py-4">
            <h6>HOME/MENU</h6>
          </Row>
          <Row className="text-center py-3">
            <Col>
              <h1 style={{ color: 'yellow', fontFamily: "fantasy" }}>MCDONALD'S MENU</h1>
            </Col>
          </Row>
          <Row className="text-center py-4">
            <Col md={4} className="menu-card">
              <div>
                <h3>VEG BURGERS</h3>
                <img src={vegPizza} height={150} width={200} alt="Veg Burgers" />
                <p>A Delight for veggie lovers! Choose from our wide range of delicious vegetable burgers, it's softer.</p>
                <Button as={Link} to="/orders"variant="primary" style={{ width: '50%' }}>VIEW ALL</Button>{' '}
              </div>
            </Col>
            <Col md={4} className="menu-card">
              <div>
                <h3>NON VEG BURGERS</h3>
                <img src={nonvegBurger} height={150} width={200} alt="Non Veg Burgers" />
                <p>A Delight for meat lovers! Choose from our wide range of delicious non-vegetable burgers, it's juicier.</p>
                <Button as={Link} to="/orders" variant="primary" style={{ width: '50%' }}>VIEW ALL</Button>{' '}
              </div>
            </Col>
            <Col md={4} className="menu-card">
              <div>
                <h3>DESSERT</h3>
                <img src={dessert} height={150} width={200} alt="Dessert" />
                <p>Indulge in our delightful desserts! Choose from our wide range of sweet treats, it's heavenly.</p>
                <Button as={Link} to="/orders"variant="primary" style={{ width: '50%' }}>VIEW ALL</Button>{' '}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Menu;
