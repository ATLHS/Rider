import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import rider_desktop from '../images/rider_desktop.jpg'; // rider_desktop.jpg | rider.png
import rider_mobile from '../images/rider_mobile.jpg'; // rider_mobile.jpg | riderm.png
import '../css/ride.css'; 
import AlgoliaPlaces from 'algolia-places-react';

const Riders = () => {
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [conditionChecked, setConditionChecked] = useState(null);

    const [locationError, setLocationError] = useState(null);
    const [destinationError, setDestinationError] = useState(null);

    const values = {
        location, 
        destination, 
        conditionChecked
    }

    const placesOptions = {
        appId: process.env.appId,
        apiKey: process.env.apiKey,
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
        isValid && console.log(values);
    }
    return (
    <Row className="ride">
        <Image className="riders h-100 w-100 mw-100" src={window.innerWidth > 700 ? rider_desktop : rider_mobile}fluid/>
        <Col className="driver position-absolute ">
            <Row className="d-flex flex-column rider_container">
                <p className="text-left text-white ride_headline1">Toute la ville. Dans le creux de votre main.</p>
                
            </Row>
        </Col>
    </Row>
    );
}

export default Riders;