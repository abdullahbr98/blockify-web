import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'bootstrap';
import { Form } from 'react-bootstrap';
import './topbar.css'
export default function TopBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" className='px-5'>
                <Navbar.Brand href="#home" className='brandName'>Blockify Dapp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/maps">Maps</Nav.Link>
                        
                    </Nav>
                    <Nav.Link href="/" className='ms-auto text-light btn btn-secondary'>Log Out</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
