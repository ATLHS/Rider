import React, {useState, useEffect} from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { Link, useLocation} from 'react-router-dom';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useNavColor from '../hooks/useNavColor';
import '../../css/navigation.css';

const Navigation = () => {
    const [isOpen, setisOpen] = useState(false);
    const [navColor, setNavColor] = useState();
    const location = useLocation();
    const [color] = useNavColor(location.pathname);
    useEffect(() => {
        setNavColor(isOpen ? "text-light" : color);
    })
    
    return ( 
    <>
        <Row className="position-absolute w-100 navbar"> 
            <Navbar className="w-100"  bg="transparent" variant="dark">
                <Link onClick={() => setisOpen(false)} className={`${isOpen ? "text-light" : navColor}`} id="brand" to="/">RIDER</Link>
                <BrowserView viewClassName="ml-auto">
                    <Nav>
                        <Link to="/" className={`${navColor} text-decoration-none ml-2 mr-2 link`} href="#features">Passagers</Link>
                        <Link to="/drivers" className={`${navColor} text-decoration-none ml-2 mr-2 link`} href="#driver">Chauffeur</Link>
                        <Link to="/signin" className={`${navColor} text-decoration-none ml-2 mr-2 link`} href="#login">Connexion</Link>
                        <Link to="/signup" className={`${navColor} text-decoration-none ml-2 mr-2 link`} href="#signup">Inscription</Link>
                    </Nav>
                </BrowserView>
                <MobileView viewClassName="ml-auto">
                    <Nav className="mobile_link">
                        <Burger className={navColor === "text-dark" ? "burgerDark" : "burgerLight"} onClick={() => setisOpen(!isOpen)} isOpen={isOpen}/>
                    </Nav>
                </MobileView>
            </Navbar>
        </Row>
        <MobileView>
            <Navbar className="mobile_navbar" style={{display: `${isOpen ? "block" : "none"}`}}>
                <Nav className="mobile_navlink">
                    <Link to="/" className="text-light text-decoration-none ml-2 mr-2 link" href="#features" onClick={() => setisOpen(false)}>Passager</Link>
                    <Link to="/drivers" className="text-light text-decoration-none ml-2 mr-2 link" href="#driver" onClick={() => setisOpen(false)}>Chauffeur</Link>
                    <Link to="/signin" className="text-light text-decoration-none ml-2 mr-2 link" href="#login" onClick={() => setisOpen(false)}>Connexion</Link>
                    <Link to="/signup" className="text-light text-decoration-none ml-2 mr-2 link" href="#signup" onClick={() => setisOpen(false)}>Inscription</Link>
                </Nav>
            </Navbar>
        </MobileView>
    </>
    )
}

export default Navigation;