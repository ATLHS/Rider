import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useForm } from './hooks/useForm';
import Button from 'react-bootstrap/Button';

const RiderSignUp = ({match, history}) => {
    const [signUpData, handleChange] = useForm({name: "", email: "", password: "", confirmPassword: ""});
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(signUpData);
    }
    
    return (
        <Row className="pl-0 pr-0 h-100 section">
            <Col md={4} className="m-auto">
                <h2 className="signupTitle">Inscrivez-vous et commandez votre première course avec Rider.</h2>
                <p className="text-muted">Vous avez un compte ? <Link to="/signin">Connectez-vous</Link></p>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="signUpName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Nom" value={signUpData.name} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="signUpEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email" value={signUpData.email} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="signUpPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control name="password" type="text" placeholder="Mot de passe" value={signUpData.password} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="signUpConfirmPassword">
                        <Form.Label>Confirmer votre mot de passe</Form.Label>
                        <Form.Control name="confirmPassword" type="text" placeholder="Confirmer votre mot de passe" value={signUpData.confirmPassword} onChange={handleChange}></Form.Control>
                    </Form.Group>
                    <Button type="submit"variant="dark" block>Inscription</Button>
                </Form> 
            </Col>
        </Row>
    );
}

export default RiderSignUp;