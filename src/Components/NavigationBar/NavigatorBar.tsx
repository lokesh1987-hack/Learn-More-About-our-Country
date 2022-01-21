import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './NavigationBar.scss'

function NavigatorBar() {

    const style = {
       marginLeft : "50px",
       textDecoration :"none",
    }
    return (
        <div>
            <Navbar className="p-2" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">L</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link style={style} to="/">Home</Link>
                            <Link style={style} to="/countries">Countries</Link>
                            <Link style={style} to="/contactus">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigatorBar
