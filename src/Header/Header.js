import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

//import Css
import "./Header.css";

class Header extends React.Component {
    
    render() {
        return(
            <Navbar bg="light header_bg" expand="lg">
                <Navbar.Brand href="/" className="brand">Appiness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/">User</Nav.Link>
                    </Nav>                
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;