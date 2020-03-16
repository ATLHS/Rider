import React from "react";
import Row from 'react-bootstrap/Row';
import Map from './layout/Map';
import Col from 'react-bootstrap/Col';
import '../css/homepage.css';

const Homepage = () => {
    const direction = {
        origin: localStorage.getItem('origin'),
        destination: localStorage.getItem('destination')
    }
    return (
        <>
            <Row className="h-100">
                <Col md={12} className="p-0 mapContainer">
                    <Map origin={direction.origin} destination={direction.destination}/>
                </Col>
                <Col md={3} xs={12} className="bg-white rounded driversOptions p-0">
                    <Row className="directionInfo w-100 h-25 m-0 rounded-top"></Row>
                </Col>
            </Row>
        </>
    );
}

export default Homepage;