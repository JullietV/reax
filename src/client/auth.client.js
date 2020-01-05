import axios from 'axios';

import { API_AUTH_HOST } from './config';

const RESOURCE = 'login';

export const login = (user) => {
    return axios.post(`${API_AUTH_HOST}/${RESOURCE}`, user);
};

export const signin = (user) => {
    return axios.post(`${API_AUTH_HOST}/api/user`, user);
};


export const findPostById = (id) => {
    return axios(`${API_AUTH_HOST}${RESOURCE}/${id}`);
};