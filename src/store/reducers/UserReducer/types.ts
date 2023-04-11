import { UserRolesEnum } from "enums/userTypes";

export const USER_AUTH = "USER/AUTH";
export const USER_UNAUTH = "USER/UNAUTH";
export const USER_FETCH = 'USER/GET';

export interface IAuthUser {
    type: typeof USER_AUTH;
    auth: boolean;
}

export interface IUnauthUser {
    type: typeof USER_UNAUTH;
    auth: boolean;
}

export interface IFetchUser {
    type: typeof USER_FETCH;
    name: string;
    surname: string;
    patronymic: string;
    picture: string;
    role: UserRolesEnum;
}

export interface IUserReducerModel {
    readonly auth: boolean;
    readonly name: string | null;
    readonly surname: string | null;
    readonly patronymic: string | null;
    readonly picture: string | null;
    readonly role: UserRolesEnum | null;
}

export type UserActionTypes = 
    | IAuthUser
    | IUnauthUser
    | IFetchUser;