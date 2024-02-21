import React, {useEffect, useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="/">Progress</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="navbar-collapse">
                    <Nav className="ml-auto" style={{flex: 1}}>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/trainer" className="nav-link">Trainers</Link>
                    </Nav>
                    <Nav className="justify-content-end" style={{flex: 1}}>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;