import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import driver_desktop from '../images/driver_desktop.png';

const Drivers = () => {
    return (
    <Row className="ride">
        <Image className="riders w-100 h-100 mw-100" src={driver_desktop} fluid/>
        <Col className="driver position-absolute ">
            <Row className="d-flex flex-column rider_container">
                <p className="text-left text-white ride_headline1">Conduisez. Et augmentez vos revenus.</p>
                <Col className="pb-2 pl-0" md={5}>
                    <Button variant="light" type="button">Devenir chauffeur</Button>
                </Col>
            </Row>
        </Col>
    </Row>
    );
}

export default Drivers;