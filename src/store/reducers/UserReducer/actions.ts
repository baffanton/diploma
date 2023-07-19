import { NavigateFunction } from 'react-router-dom';
import { closeModal, hideLoader, openModal, showLoader } from '../PageReducer/actions';
import { ILogInResponse, IUserData } from './helpers';
import { IFetchUser, ILogInUser, ILogOutUser, USER_FETCH, USER_LOGIN, USER_LOGOUT } from './types';
import { AxiosResponse } from 'axios';
import { ModalTypes } from 'enums/modalTypes';
import { RequestApiEnum } from 'enums/requestApi';
import { RequestTypesEnum } from 'enums/requestTypes';
import { request } from 'helpers/request';
import { IAuthData } from 'pages/AuthPage/types';

export const loginUser =
    (authData: IAuthData, navigate: NavigateFunction) => (dispatch: (arg0: ILogInUser) => void) => {
        // @ts-ignore
        dispatch(showLoader());

        request(RequestTypesEnum.post, RequestApiEnum.getToken, authData)
            .then((res) => {
                const { data } = res;

                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('user', JSON.stringify(data.user));

                dispatch({ type: USER_LOGIN });

                // @ts-ignore
                dispatch(fetchUser(data.user));

                navigate('/home');
            })
            .catch(() => {
                dispatch(
                    // @ts-ignore
                    openModal(ModalTypes.messageModal, dispatch(closeModal()), {
                        message: 'Неверный логин или пароль',
                    }),
                );
            })
            .finally(() => {
                // @ts-ignore
                dispatch(hideLoader());
            });
    };

export const getToken = async (authData: IAuthData): Promise<AxiosResponse<ILogInResponse>> => {
    return await request(RequestTypesEnum.post, RequestApiEnum.getToken, authData);
};

export const logoutUser = () => (dispatch: (arg0: ILogOutUser) => void) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    dispatch({
        type: USER_LOGOUT,
    });
};

export const fetchUser = (user: IUserData) => (dispatch: (arg0: IFetchUser) => void) => {
    const { firstname, lastname, surname, imageUrl, role } = user;

    dispatch({
        type: USER_FETCH,
        firstname,
        lastname,
        surname,
        imageUrl,
        role,
    });
};
