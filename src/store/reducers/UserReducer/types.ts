import { UserRolesEnum } from "enums/userTypes";
import { IUserModel } from "helpers/IUserTypes";

export const USER_LOGOUT = "USER/LOGOUT";
export const USER_FETCH = 'USER/GET';
export const USER_CHECK_AUTH = 'USER/CHECK_AUTH'

export interface IFetchUser {
    type: typeof USER_FETCH;
    name: string;
    surname: string;
    patronymic: string;
    picture: string;
    role: UserRolesEnum;
    auth: boolean;
}

export interface ILogoutUser {
    type: typeof USER_LOGOUT;
    name: string;
    surname: string;
    patronymic: string;
    picture: string;
    role: UserRolesEnum;
    auth: boolean;
}

export interface IUserReducerModel {
    readonly name: string | null;
    readonly surname: string | null;
    readonly patronymic: string | null;
    readonly picture: string | null;
    readonly role: UserRolesEnum | null;
    readonly auth: boolean | null;
}

export type UserActionTypes = 
    | IFetchUser
    | ILogoutUser;