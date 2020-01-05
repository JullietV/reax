import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_OK,
    AUTH_LOGIN_NOK,
    AUTH_SIGNIN_START,
    AUTH_SIGNIN_OK,
    AUTH_SIGNIN_NOK,
    AUTH_LOGOUT
} from './const'

const ls = window.localStorage

const initialState = {
    isLogin: !!ls.getItem('token'),
    token: !!ls.getItem('token') ? ls.getItem('token') : '',
    loading: false,
    success: false,
    error: false,
    errorMessage: '',
    isRegistered: false
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_START:
            return {
                ...prevState,
                loading: true,
                error: false,
                success: false,
                isLogin: false
            }
        case AUTH_LOGIN_NOK:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                isLogin: false,
                errorMessage: action.payload
            }
        case AUTH_LOGIN_OK:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: true,
                isLogin: true,
                isRegistered: false,
                token: action.payload
            }
        case AUTH_SIGNIN_START:
            return {
                ...prevState,
                loading: true,
                error: false,
                success: false,
                isLogin: false,
                isRegistered: false
            }
        case AUTH_SIGNIN_NOK:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: false,
                errorMessage: action.payload,
                isRegistered: false
            }
        case AUTH_SIGNIN_OK:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: true,
                isRegistered: true
            }
        case AUTH_LOGOUT:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: false,
                isLogin: false,
                token: false,
                isRegistered: false
            }
        default:
            return {
                ...prevState
            }
    }
}

export default reducer;