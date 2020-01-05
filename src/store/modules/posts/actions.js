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
    SET_POST_EDIT,
} from './const'

import {allPosts, createPost, deletePost} from '../../../client/post.client';

const getAllPostsRequestCreator = () => ({ type: POSTS_GET_START, payload: null})

const getAllPostsOkCreator = (posts) => {
    return {
        type: POSTS_GET_OK,
        payload: posts
    }
}

const getAllPostsNokCreator = (errorMessage) => {
    return {
        type: POSTS_GET_NOK,
        payload: errorMessage
    }
}

const postCreateStart = () => ({type: POST_CREATE_START})

const postCreateOk = () => ({type: POST_CREATE_OK})

const postCreateNOk = () => ({type: POST_CREATE_NOK})

const postDeleteStart = () => ({type: POST_DELETE_START})

const postDeleteOk = () => ({type: POST_DELETE_OK})

const postDeleteNOk = () => ({type: POST_DELETE_NOK})

export const setPostToEdit = (post) => ({type: SET_POST_EDIT, payload: post})

export const asyncGetAllPostsCreator = () => {
    return async (dispatch, getStore) => {
        dispatch(getAllPostsRequestCreator());
        try {
            const {data} = await allPosts();
            dispatch(getAllPostsOkCreator(data.data));
        } catch(e) {
            dispatch(getAllPostsNokCreator(e));
        }
    }
}

export const asyncCreatePostCreator = (payload) => {
    return async (dispatch, getStore) => {
        dispatch(postCreateStart());
        try {
            const {data} = await createPost(payload);
            dispatch(postCreateOk());
        } catch(e) {
            dispatch(postCreateNOk(e));
        }
    }
}

export const asyncDeletePostCreator = (id) => {
    return async (dispatch, getStore) => {
        dispatch(postDeleteStart());
        try {
            const {data} = await deletePost(id);
            // este setTimeout es para mostrar el efecto del loading, para que sea más notorio que algo está haciendose
            // porque el delete es demasiado rápido
            setTimeout(() => {
                dispatch(asyncGetAllPostsCreator())
                dispatch(postDeleteOk());
            }, 1000)
        } catch(e) {
            dispatch(postDeleteNOk(e));
        }
    }
}