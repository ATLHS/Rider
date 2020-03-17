import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../css/signup.css';

const Signup = () => {
    return (
        <Row className="pl-0 pr-0 h-100 signupContainer section">
            <Col xs={12} md={6} className="signupDriverSection">
                <Row>
                    <Col xs={10} md={8} className="m-auto">
                       <Link className="text-decoration-none" to="/driverssignup">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="text-light">Devenez chauffeur</h2><i className="fas fa-arrow-right text-light arrow"></i>
                            </div>
                       </Link>
                        <hr className="w-100 signUpHr"></hr>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6} className="signupRiderSection">
                <Row>
                    <Col xs={10} md={8} className="m-auto">
                        <Link className="text-decoration-none" to="/riderssignup">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="text-light">Commandez une course</h2><i className="fas fa-arrow-right text-light arrow"></i>
                            </div>
                        </Link>
                        <hr className="w-100 signUpHr"></hr>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default Signup;