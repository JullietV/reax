import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_OK,
    AUTH_LOGIN_NOK,
    AUTH_SIGNIN_START,
    AUTH_SIGNIN_OK,
    AUTH_SIGNIN_NOK,
    AUTH_LOGOUT
} from './const';

import {parseJwt} from '../../../utils/parseJWT';
import {login, signin} from '../../../client/auth.client';

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

const signinRequestActionCreator = () => ({ type: AUTH_SIGNIN_START, payload: null})

const signinOkActionCreator = (token) => {
    return {
        type: AUTH_SIGNIN_OK,
        payload: token
    }
}

const signinNokActionCreator = (errorMessage) => {
    return {
        type: AUTH_SIGNIN_NOK,
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
            return data
        } catch(e) {
            const errorMessage = e.response.status === 400 ? 'El mail o la contraseña son incorrectos' : 'Ha ocurrido un error inesperado'
            setTimeout(() => {
                dispatch(loginNokActionCreator(errorMessage))
            }, 1000)
            return false
        }
    
    }
}

export const signinAsyncActionCreator = (user) => {
    return async (dispatch, getStore) => {
        dispatch(signinRequestActionCreator());
        try {
            const {data} = await signin(user)
            setTimeout(() => {
                dispatch(signinOkActionCreator())
            }, 1000)
            return data
        } catch(e) {
            const errorMessage = e.response.status === 400 ? 'El mail o la contraseña son incorrectos' : 'Ha ocurrido un error inesperado'
            setTimeout(() => {
                dispatch(signinNokActionCreator(errorMessage))
            }, 1000)
            return false
        }
    }
}