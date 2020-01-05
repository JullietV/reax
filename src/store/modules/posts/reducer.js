import {
    POSTS_GET_START,
    POSTS_GET_OK,
    POSTS_GET_NOK,
    POST_CREATE_START,
    POST_CREATE_OK,
    POST_CREATE_NOK,
    POST_DELETE_START,
    POST_DELETE_OK,
    POST_DELETE_NOK,
    SET_POST_EDIT
} from './const'


const initialState = {
    loading: false,
    success: false,
    error: false,
    errorMessage: '',
    posts: [],
    postToEdit: null
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case POSTS_GET_START:
            return {
                ...prevState,
                loading: true,
                error: false,
                success: false,
                posts: []
            }
        case POSTS_GET_OK:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: true,
                posts: action.payload
            }
        case POSTS_GET_NOK:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: true,
                errorMessage: action.payload
            }
        case POST_CREATE_START:
            return {
                ...prevState,
                loading: true,
                error: false,
                success: false
            }
        case POST_CREATE_OK:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: true
            }
        case POST_CREATE_NOK:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: true,
                errorMessage: action.payload
            }
        case POST_DELETE_START:
            return {
                ...prevState,
                loading: true,
                error: false,
                success: false
            }
        case POST_DELETE_OK:
            return {
                ...prevState,
                loading: false,
                error: false,
                success: true
            }
        case POST_DELETE_NOK:
            return {
                ...prevState,
                loading: false,
                error: true,
                success: true,
                errorMessage: action.payload
            }
        case SET_POST_EDIT:
            return {
                ...prevState,
                postToEdit: action.payload
            }
        default:
            return {
                ...prevState
            }
    }
}

export default reducer;