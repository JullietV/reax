import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_OK,
    AUTH_LOGIN_NOK,
    AUTH_LOGOUT
} from './const'

const ls = window.localStorage

const initialState = {
    isLogin: !!ls.getItem('token'),
    token: !!ls.getItem('token') ? ls.getItem('token') : '',
    loading: false,
    success: false,
    error: false,
    errorMessage: ''
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
                token: action.payload
            }
        case AUTH_LOGOUT:
            return {
                ...prevState,
                loading: true,
                error: false,
                success: false,
                isLogin: false,
                token: false
            }
        default:
            return {
                ...prevState
            }
    }
}

export default reducer;