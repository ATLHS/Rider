import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import rider_desktop from '../images/rider_desktop.jpg'; // rider_desktop.jpg | rider.png
import rider_mobile from '../images/rider_mobile.jpg'; // rider_mobile.jpg | riderm.png
import '../css/ride.css'; 
import AlgoliaPlaces from 'algolia-places-react';

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const Riders = () => {
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [conditionChecked, setConditionChecked] = useState(null);

    const [locationError, setLocationError] = useState(null);
    const [destinationError, setDestinationError] = useState(null);

    const [redirect, setRedirect] = useState(false);

    const placesOptions = {
        appId: API_ID,
        apiKey: API_KEY,
        language: 'fr',
        countries: ['fr'] 
    }

    const formIsValid = () => {
        if (location === "") {
            setLocationError(true);
            return false;
        }
        if (destination === "") {
            setDestinationError(true);
            return false;
        }
        if (conditionChecked !== true) {
            setConditionChecked(false);
            return false;
        }
        return true; 
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = formIsValid();
        if (isValid){
            localStorage.setItem('origin', location);
            localStorage.setItem('destination', destination);
            setRedirect(isValid);
        }
        
    }
    return redirect ? <Redirect to="/homepage" push/> : (
        <Row className="ride">
            <Image className="riders h-100 w-100 mw-100" src={window.innerWidth > 700 ? rider_desktop : rider_mobile}fluid/>
            <Col className="driver position-absolute ">
                <Row className="d-flex flex-column rider_container">
                    <p className="text-left text-white ride_headline1">Toute la ville. Dans le creux de votre main.</p>
                    <Form noValidate className="rider_form" onSubmit={handleSubmit}>
                        <Row>
                            <Col className="pb-2" md={6}>
                                <AlgoliaPlaces
                                placeholder="Saisissez un lieu de prise en charge."
                                options={{...placesOptions}}
                                className="bg-transparent text-light shadow-none border border-white"
                                onChange={({suggestion}) => (setLocation(suggestion.value), setLocationError(false))}
                                onClear={() => (setLocationError(true), setLocation("")) }
                                required
                                />
                                <p className="text-danger">{locationError ? "Saisissez une location valide." : ""}</p>
                            </Col>
                            <Col className="pb-2" md={6}>
                                <AlgoliaPlaces
                                placeholder="Saisissez votre destination."
                                options={{...placesOptions}}
                                className="bg-transparent text-light shadow-none border border-white"
                                onChange={({suggestion}) => (setDestination(suggestion.value, setDestinationError(false)))}
                                onClear={() => (setDestinationError(true), setDestination(""))}
                                required
                                />
                                <p className="text-danger">{destinationError ? "Saisissez une destination valide." : ""}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={`pb-2 ${conditionChecked === false ? "text-danger" : "text-white"}`} md={7}>
                            <Form.Check
                                    label="J’accepte les conditions générales."
                                    onChange={() => setConditionChecked(conditionChecked ? false : true)}
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