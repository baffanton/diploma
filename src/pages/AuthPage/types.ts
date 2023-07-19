import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { ILogInUser } from 'store/reducers/UserReducer/types';

export interface IAuthPage {
    loginUser: (authData: IAuthData, navigate: NavigateFunction) => Dispatch<ILogInUser>;
    auth: boolean;
}

export interface IAuthData {
    email: string;
    password: string;
}
