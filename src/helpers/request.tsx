import axios, { AxiosRequestConfig } from 'axios';
import { RequestApiEnum } from 'enums/requestApi';
import { RequestTypesEnum } from 'enums/requestTypes';
import { TokenTypesEnum } from 'enums/tokenTypes';

axios.defaults.baseURL = 'http://192.168.0.52:8080';
axios.defaults.withCredentials = true;

const METHODS = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    default: axios.get,
};

const getConfigWithAuth = (tokenType: TokenTypesEnum): AxiosRequestConfig => {
    let token  = null;
    switch (tokenType) {
        case TokenTypesEnum.accessToken:
            token = localStorage.getItem('accessToken');
            break;
        case TokenTypesEnum.refreshToken:
            token = localStorage.getItem('refreshToken');
            break;
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    return config;
}

export function request(method: RequestTypesEnum, api: RequestApiEnum, params: any, tokenType?: TokenTypesEnum) {
    if (!tokenType) {
        return METHODS[method](api, params);
    }

    debugger;

    const config = getConfigWithAuth(tokenType);

    if (method === RequestTypesEnum.get) {
        return METHODS[method](api, config);
    }

    return METHODS[method](api, params, config);
}

export const getParseResponse = (res: any, method = 'get') => {
    if (method === 'get') {
        return res;
    }
    return JSON.stringify(res);
};
