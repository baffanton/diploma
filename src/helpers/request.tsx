import axios from 'axios';
import { RequestApiEnum } from 'enums/requestApi';
import { RequestTypesEnum } from 'enums/requestTypes';

export const BASE_URL = 'http://192.168.0.52:8080/api/v1';

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
})

$api.interceptors.request.use(config => {
    if (!localStorage.getItem('token')) {
        return config;
    }

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
})

$api.interceptors.response.use(config => {
    return config;
}, async error => {
    const originalRequest = error.config;
    originalRequest._isRetry = true;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        const response = await axios.get(`${BASE_URL}/refresh`, {withCredentials: true});
        localStorage.setItem('token', response.data.accessToken);

        return $api.request(originalRequest);
    }
    throw error;
})

export default $api;

const METHODS = {
    get: $api.get,
    post: $api.post,
    put: $api.put,
    delete: $api.delete,
    default: $api.get,
};

export function request(method: RequestTypesEnum, api: RequestApiEnum | string, params: any) {

    return METHODS[method](api, params);
}

export const getParseResponse = (res: any, method = 'get') => {
    if (method === 'get') {
        return res;
    }
    return JSON.stringify(res);
};
