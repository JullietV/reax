import React from 'react';
import {useSelector} from 'react-redux';
import './Navbar.scss';

import {Container,  Row} from 'reactstrap';
import {MDBIcon} from 'mdbreact';
import {NavLink} from 'react-router-dom';

import routes from '../../routes';

/**
 * Navbar
 * @version v1.0.0
 * 
 * @param {*} props 
 */
const Navbar = (props) => {
    const auth = useSelector(state => state.auth)
    return (
        <div className="reax-navbar">
            <Container>
                <Row>
                    <div className="reax-navbar-wrapper">
                        <div className="reax-navbar-brand">
                            <h1>R.</h1>
                        </div>
                        <div className="reax-navbar-menu">
                            <ul>
                                <a href="#" className="active">
                                    <li>
                                        <MDBIcon className="d-block d-md-none" icon="envelope-open-text" /> <span className="d-none d-md-block">Historias</span> 
                                    </li>
                                </a>
                                <a href="#">
                                    <li>
                                    <MDBIcon far className="d-block d-md-none" icon="heart" /> <span className="d-none d-md-block">Acerca de</span>
                                    </li>
                                </a>
                                <NavLink to={auth.token ? routes.admin : routes.login }>
                                    <li>
                                        <MDBIcon far icon="user-circle" />
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;