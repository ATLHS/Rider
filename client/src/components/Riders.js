import React, {useState} from 'react';
import useForm from './hooks/useForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import rider_desktop from '../images/rider.png';
import rider_mobile from '../images/riderm.png';
import '../css/ride.css';

const Riders = () => {
    const [values, handleInputChange, handleSubmit, validated, formIsValid] = useForm({location: "", destination:  "", condition: false});
    formIsValid && console.log("isValid");
    return (
    <Row className="ride" style={{height: window.innerHeight}}>
        <Image className="riders h-100 w-100 mw-100" src={window.innerWidth > 700 ? rider_desktop : rider_mobile} fluid/>
        <Col className="driver position-absolute ">
            <Row className="d-flex flex-column rider_container">
                <p className="text-left text-white ride_headline1">Toute la ville. Dans le creux de votre main.</p>
                <Form noValidate className="rider_form" validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col className="pb-2" md={6}>
                            <Form.Control 
                            name="location"
                            value={values.location} 
                            className="bg-transparent text-light shadow-none border border-white " 
                            placeholder="indiquez votre location" 
                            onChange={handleInputChange}
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            Veuillez fournir une location valide.
                            </Form.Control.Feedback>
                        </Col>
                        <Col className="pb-2" md={6}>
                            <Form.Control 
                            name="destination"
                            value={values.destination} 
                            className="bg-transparent text-light shadow-none border border-white" 
                            placeholder="Indiquez votre destination" 
                            onChange={handleInputChange}
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            Veuillez fournir une destination valide.
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-2 text-light" md={7}>
                           <Form.Check
                                name="condition"
                                label="J’accepte les Conditions d'utilisation de Rider"
                                value={values.condition}
                                onChange={handleInputChange}
                                feedback="You must agree before submitting."
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-2" md={5}>
                            <Button variant="light" type="submit">Commandez une course</Button>
                        </Col>
                    </Row>
                    
                </Form>
            </Row>
        </Col>
    </Row>
    );
}

export default Riders;