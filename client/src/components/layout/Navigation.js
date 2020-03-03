import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../css/navigation.css';

const Navigation = () => {
    return (
    <Row className="position-absolute w-100 navbar"> 
        <Navbar className="w-100"  bg="transparent" variant="dark">
            <Link id="brand" to="/">RIDER</Link>
            <Nav className="ml-auto desktop_navlink">
                <Link to="/" className="text-light ml-2 mr-2 link" href="#features">Passager</Link>
                <Link to="/drivers" className="text-light ml-2 mr-2 link" href="#home">Chauffeur</Link>
                <Link to="/login" className="text-light ml-2 mr-2 link" href="#pricing">Connexion</Link>
            </Nav>
            <Nav className="ml-auto mobile_link">
                <span><i className="fas fa-bars"></i></span>
            </Nav>
        </Navbar>
    </Row> 
    )
}

export default Navigation;