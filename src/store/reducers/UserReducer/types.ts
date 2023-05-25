import { IUserModel } from "helpers/IUserTypes";

export const USER_LOGOUT = "USER/LOGOUT";
export const USER_FETCH = 'USER/GET';
export const USER_CHECK_AUTH = 'USER/CHECK_AUTH'

export interface IFetchUser {
    type: typeof USER_FETCH;
    user: IUserModel;
    auth: boolean;
}

export interface ILogoutUser {
    type: typeof USER_LOGOUT;
    user: null;
    auth: boolean;
}

export interface ICheckAuth {
    type: typeof USER_CHECK_AUTH;
    user: IUserModel | null;
    auth: boolean;
}

export interface IUserReducerModel {
    readonly auth: boolean;
    readonly user: IUserModel | null;
}

export type UserActionTypes = 
    | IFetchUser
    | ILogoutUser
    | ICheckAuth;