import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Login.scss';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Loader from '../loader/Loader';
import {MDBIcon} from 'mdbreact';

import routes from '../../routes';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loginAsyncActionCreator} from '../../store/modules/auth/actions';


const Login = (props) => {
    const {auth} = props
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isLogin = useSelector(store => store.auth.isLogin);
    
    const handleUserChange = (event) => {
        event.persist();
        setUser(event.target.value);
    };

    const handlePasswordChange = (event) => {
        event.persist();
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: user,
            password
        }

        const res = await dispatch(loginAsyncActionCreator(data))

        
    }

    useEffect(() => {
        if (isLogin) {
            const p = props.parentProps;
            p.history.push('/');
        }
    }, [isLogin, props.parentProps])

    return (
        <div className="reax-login">
            <h1>Inicia sesión</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur aliquam perferendis, vitae neque quia enim facere accusamus, 
            numquam est voluptate voluptatibus dolores sed officiis, beatae a asperiores unde debitis quas.</p>
            <Input 
            placeholder="Email" 
            value={user} 
            type="text"
            disabled={auth.loading}
            onInputChange={handleUserChange}></Input>
            <Input
            placeholder="Contraseña"
            value={password} 
            type="password"
            disabled={auth.loading}
            onInputChange={handlePasswordChange}
            ></Input>
            {auth.errorMessage ? <p className="reax-auth-error"> <MDBIcon icon="exclamation-circle" /> {auth.errorMessage}</p> : '' }
            {auth.loading 
            ? <div className="reax-auth-loader-wrapper"><Loader /></div>
            : <ul className="reax-login-actions">
                <li><Button onButtonClick={handleSubmit} text="Iniciar sesión"/></li>
                <li><NavLink to={routes.home}>Volver al inicio</NavLink></li>
            </ul>
            }
        </div>
    );
}

export default Login;

