import React from 'react';
import '../styles/Header.css';
import Sidebar from "./Sidebar";
import {Navbar, Container} from "react-bootstrap";

function Header(props) {
    const {Brand, Toggle} = Navbar;
    return(
        <header className="Header">
            <Container fluid>
                <Navbar expand={false}>
                    <Brand href='#' style={{ color: 'white' }}>Sunbird Web</Brand>
                    <Toggle aria-controls="offcanvasNavbar" style={{borderColor: 'white', color: 'white'}} />
                    <Sidebar />
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;