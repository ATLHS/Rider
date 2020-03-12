import React from "react";
import Row from 'react-bootstrap/Row';
import Map from './layout/Map';
import Col from 'react-bootstrap/Col';

const Homepage = () => {
    const direction = {
        origin: localStorage.getItem('origin'),
        destination: localStorage.getItem('destination')
    }
    return (
        <>
            <Row className="h-100">
                <Col className="p-0" style={{height: "100%", width: "100%"}}>
                    <Map origin={direction.origin} destination={direction.destination}/>
                </Col>
            </Row>
        </>
    );
}

export default Homepage;