import axios from 'axios';

import { API_AUTH_HOST } from './config';

const RESOURCE = '/api/post';

export const allPosts = () => {
    return axios(`${API_AUTH_HOST}${RESOURCE}`);
};

export const detailPost = (id) => {
    return axios(`${API_AUTH_HOST}${RESOURCE}/${id}/`);
};

export const createPost = (post) => {
    return axios.post(`${API_AUTH_HOST}${RESOURCE}`, post);
};

export const deletePost = (id) => {
    return axios.delete(`${API_AUTH_HOST}${RESOURCE}/${id}`);
};

export const findPostById = (id) => {
    return axios(`${API_AUTH_HOST}${RESOURCE}/${id}`);
};