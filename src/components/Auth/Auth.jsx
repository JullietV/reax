import React, {useState} from 'react';
import './Auth.scss';

import { Container, Row, Col } from 'reactstrap';
import Login from '../Login/Login';
import SignIn from '../SignIn/SignIn';
import Credits from '../Credits/Credits';
import pinkWoman from '../../assets/img/woman.jpg';
import mountain from '../../assets/img/mountain.jpg';

const Auth = () => {
    const [action, setAction] = useState('register')

    const getBackground = (action) => {
        if (action === 'login')
        return pinkWoman;
        
        return mountain;
    }

    return (
        <div className="reax-auth" style={{backgroundImage: `url(${getBackground(action)})`}}>
            <Container fluid>
                <Row>
                    <Col xs="12" md="6" className="reax-auth-wrapper">
                        <div className="reax-auth-selection-type">
                            <a onClick={() => setAction('login')} className={action === 'login' ? 'active' : ''}>Iniciar sesión</a>
                            <a onClick={() => setAction('register')} className={action === 'register' ? 'active' : ''}>Registrarse</a>
                        </div>
                        <div className="reax-auth-form">
                            {action === 'login' ? <Login></Login> : <SignIn></SignIn>}
                        </div>
                        <div className="reax-auth-footer">
                            <Credits></Credits>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Auth;