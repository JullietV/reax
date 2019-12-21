import React from 'react';
import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_OK,
    AUTH_LOGIN_NOK,
    AUTH_LOGOUT
} from './const';

import {parseJwt} from '../../../utils/parseJWT';
import {login} from '../../../client/auth.client';
import {Redirect} from 'react-router-dom';

import routes from '../../../routes';

const ls = window.localStorage

const loginRequestActionCreator = () => ({ type: AUTH_LOGIN_START, payload: null})

const loginOkActionCreator = (token) => {
    return {
        type: AUTH_LOGIN_OK,
        payload: token
    }
}

const loginNokActionCreator = (errorMessage) => {
    return {
        type: AUTH_LOGIN_NOK,
        payload: errorMessage
    }
}

export const logoutActionCreator = () => {
    ls.removeItem('token')
    return {
        type: AUTH_LOGOUT,
        payload: null
    }
}

export const loginAsyncActionCreator = (user) => {
    return async (dispatch, getStore) => {
        dispatch(loginRequestActionCreator());
        try {
            const {data} = await login(user)
            const parsed = parseJwt(data.data)
            setTimeout(() => {
                dispatch(loginOkActionCreator(parsed))
            }, 1000)
            ls.setItem('token', parsed)
            return <Redirect to={routes.home} />
        } catch(e) {
            const errorMessage = e.response.status === 400 ? 'El mail o la contraseña son incorrectos' : 'Ha ocurrido un error inesperado'
            setTimeout(() => {
                dispatch(loginNokActionCreator(errorMessage))
            }, 1000)
            return false
        }
    
    }
}