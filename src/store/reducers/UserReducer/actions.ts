import { BASE_URL, request } from 'helpers/request';
import { RequestTypesEnum } from 'enums/requestTypes';
import { RequestApiEnum } from 'enums/requestApi';
import axios, { AxiosResponse } from 'axios';
import { IFetchUser, USER_FETCH } from './types';
import { NavigateFunction } from 'react-router-dom';
import { hideLoader, showLoader } from '../PageReducer/actions';

export const getToken = async (username: string, password: string): Promise<AxiosResponse<string>> => {
    return await axios.post(`${BASE_URL}/auth/login`, { username, password }, { withCredentials: true });
};

export const refreshToken = async (): Promise<AxiosResponse<any>> => {
    return await axios.get(`${BASE_URL}/auth/refresh`, {
        withCredentials: true,
    });
};

export const fetchUser = (navigate: NavigateFunction) => (dispatch: (arg0: IFetchUser) => void) => {
    // @ts-ignore
    dispatch(showLoader());
    request(RequestTypesEnum.get, RequestApiEnum.getUser, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            const { firstname, lastname, surname, imageUrl, role } = data;

            dispatch({
                type: USER_FETCH,
                firstname,
                lastname,
                surname,
                imageUrl,
                role,
                auth: true,
            });
        })
        .catch(() => {
            navigate('/');
        })
        .finally(() => {
            // @ts-ignore
            dispatch(hideLoader());
        });
};
