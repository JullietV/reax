import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './Auth.scss';

import { Container, Row, Col } from 'reactstrap';
import Login from '../../components/Login/Login';
import SignIn from '../../components/SignIn/SignIn';
import Credits from '../../components/Credits/Credits';
import pinkWoman from '../../assets/img/woman.jpg';
import mountain from '../../assets/img/mountain.jpg';

const Auth = () => {
    const [action, setAction] = useState('login')

    const auth = useSelector(store => store.auth);

    const getBackground = (action) => {
        if (action === 'login')
        return pinkWoman;
        
        return mountain;
    }

    return (
        <div className="reax-auth" style={{backgroundImage: `url(${getBackground(action)})`}}>
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6" md="4" className="reax-auth-wrapper">
                        <div className="reax-auth-selection-type">
                            <a onClick={() => setAction('login')} className={action === 'login' ? 'active' : ''}>Iniciar sesión</a>
                            <a onClick={() => setAction('register')} className={action === 'register' ? 'active' : ''}>Registrarse</a>
                        </div>
                        <div className="reax-auth-form">
                            {action === 'login' ? <Login auth={auth}></Login> : <SignIn auth={auth}></SignIn>}
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