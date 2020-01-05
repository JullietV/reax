import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import authReducer from './modules/auth/reducer';
import postsReducer from './modules/posts/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({auth: authReducer, posts: postsReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;