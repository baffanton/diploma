import axios from 'axios';
import { RequestApiEnum } from 'enums/requestApi';
import { RequestTypesEnum } from 'enums/requestTypes';

axios.defaults.baseURL = 'http://192.168.0.52:8080';

const METHODS = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    default: axios.get,
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
