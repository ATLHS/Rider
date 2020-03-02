import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import rider_desktop from '../images/rider.png';
import rider_mobile from '../images/riderm.png';
import '../css/ride.css';

const Riders = () => {
    return (
    <Row className="ride" style={{height: window.innerHeight}}>
        <Image className="riders h-100 w-100 mw-100" src={window.innerWidth > 700 ? rider_desktop : rider_mobile} fluid/>
        <Col className="driver position-absolute ">
            <Row className="d-flex flex-column rider_container">
                <p className="text-left text-white ride_headline1">Toute la ville. Dans le creux de votre main.</p>
                <Form className="rider_form">
                    <Row>
                        <Col className="pb-2" md={4}>
                            <Form.Control className="bg-transparent text-light" placeholder="Enter pickup location"/>
                        </Col>
                        <Col className="pb-2" md={4}>
                            <Form.Control className="bg-transparent text-light" placeholder="Enter destination" />
                        </Col>
                        <Col className="pb-2" md={4}>
                            <Button className="request_a_ride_cta" type="submit" block>Commandez une course</Button>
                        </Col>
                    </Row>
                    
                </Form>
            </Row>
        </Col>
    </Row>
    );
}

export default Riders;