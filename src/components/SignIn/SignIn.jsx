import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './SignIn.scss';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Loader from '../loader/Loader';
import {MDBIcon} from 'mdbreact';

import {useDispatch, useSelector} from 'react-redux';
import {signinAsyncActionCreator} from '../../store/modules/auth/actions';
import routes from '../../routes';

const SignIn = (props) => {
    const {auth} = props
    const [inputs, setInputs] = useState({})
    const isRegistered = useSelector(store => store.auth.isRegistered)
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: inputs.email,
            password: inputs.password,
            user: inputs.user
        }

        dispatch(signinAsyncActionCreator(data))
    }

    useEffect(() => {
        if (isRegistered) {
            setInputs(inputs => {
                return {
                    user: '',
                    email: '',
                    confirmEmail: '',
                    password: '',
                    confirmPassword: ''
                }
            });
        }
    }, [isRegistered, props.parentProps])

    return (
        <div className="reax-sign-in">
            <h1>Registrate</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, impedit? Adipisci voluptatem fugiat voluptatum at, necessitatibus id impedit molestiae, eius perspiciatis porro omnis magni laborum unde quidem obcaecati ad? Totam.</p>
            <Input
            type="text"
            placeholder="Usuario"
            value={inputs.user}
            name="user"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="mail"
            placeholder="Email"
            value={inputs.email}
            name="email"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="mail"
            placeholder="Confirmar email"
            value={inputs.confirmEmail}
            name="confirmEmail"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="password"
            placeholder="Contraseña"
            value={inputs.password}
            name="password"
            onInputChange={handleInputChange}
            ></Input>
            <Input
            type="password"
            placeholder="Confirmar contraseña"
            value={inputs.confirmPassword}
            name="confirmPassword"
            onInputChange={handleInputChange}
            ></Input>
            {auth.errorMessage ? <p className="reax-auth-error"> <MDBIcon icon="exclamation-circle" /> {auth.errorMessage}</p> : '' }
            {isRegistered ? <p className="reax-auth-success"> <MDBIcon icon="check-circle" /> ¡Te has registrado exitosamente!</p> : '' }
            {auth.loading 
            ? <div className="reax-auth-loader-wrapper"><Loader /></div>
            : <ul className="reax-login-actions">
                <li><Button onButtonClick={handleSubmit} text="Registrate"/></li>
                <li><NavLink to={routes.home}>Volver al inicio</NavLink></li>
            </ul>
            }
        </div>
    )
}

export default SignIn;