import React from "react";
import Row from 'react-bootstrap/Row';
import Map from './layout/Map';
import Col from 'react-bootstrap/Col';

const Homepage = () => {
    return (
        <>
        <Row className="h-100">
            <Map />
        </Row>
        </>
    );
}

export default Homepage;