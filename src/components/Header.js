import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from 'react-router-dom'
import logo from '../Images/mcdlogo2.png'
import '../Styles/Header.css';

function Header()
{
    return(
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} style={{marginTop:'10px'}}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="link mr-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
                        <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link>
                        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        <Nav.Link as={Link} to="/signup">SIGNUP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;