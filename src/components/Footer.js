import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import '../Styles/footer.css';

function Footer()
{
  return(
    <div>
      <section className='footer'>
        <Container>
          <Row className="text-center py-5">
            <Col sm={3}>
              <h4>MENU</h4>
              <ul>
                <a href="#"><li>Veg Burger</li></a>
                <a href="#"><li>Chicken Burger</li></a>
                <a href="#"><li>Fries</li></a>
                <a href="#"><li>Combo Pack</li></a>
                <a href="#"><li>Dessert</li></a>
              </ul>
            </Col>
            <Col sm={3}>
              <h4>MACDONALDS</h4>
              <ul>
                <a href="#"><li>Restaurant Near me</li></a>
                <a href="#"><li>Burger Near Me</li></a>
                <a href="#"><li>Food Near Me</li></a>
                <a href="#"><li>Food Delivery</li></a>
                <a href="#"><li>Indian Food</li></a>
              </ul>
            </Col>
            <Col sm={3}>
              <h4>ABOUT</h4>
              <ul>
                <a href="#"><li>Gift Card</li></a>
                <a href="#"><li>Card Balance Enquiry</li></a>
                <a href="#"><li>FAQ</li></a>
                <a href="#"><li>Burger</li></a>
                <a href="#"><li>Non Veg Burger</li></a>
              </ul>
            </Col>
            <Col sm={3}>
            </Col>
          </Row>
        </Container>
        <hr style={{color:'white',border:'1px solid white'}}/>
        <h6 style={{color:'white',textAlign:'center'}}>Copyright Reserved @ 2024 Shreya</h6>
      </section>
    </div>
  )
}
export default Footer;