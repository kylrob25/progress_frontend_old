import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setOpen(false);
    }, [location]);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={open}>
            <Container>
                <Navbar.Brand as={Link} to="/">Progress</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setOpen(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/admin/view-users" onClick={() => setOpen(false)}>Users</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login" onClick={() => setOpen(false)}>Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" onClick={() => setOpen(false)}>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
