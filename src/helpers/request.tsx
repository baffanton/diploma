import axios from 'axios';
import { RequestApiEnum } from 'enums/requestApi';
import { RequestTypesEnum } from 'enums/requestTypes';

export const BASE_URL = 'http://localhost:3001';

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
    if (!localStorage.getItem('token')) {
        return config;
    }

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
});

export default $api;

const METHODS = {
    get: $api.get,
    post: $api.post,
    put: $api.put,
    delete: $api.delete,
    default: $api.get,
};

export function request(method: RequestTypesEnum, api: RequestApiEnum | string, params) {
    return METHODS[method](api, params);
}
