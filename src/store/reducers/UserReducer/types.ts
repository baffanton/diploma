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
    role: UserRolesEnum | null;
}

export interface IFetchUser {
    type: typeof USER_FETCH;
    role: UserRolesEnum;
    auth: boolean;
}

export interface IUserReducerModel {
    readonly auth: boolean;
    readonly role: UserRolesEnum | null;
}

export type UserActionTypes = 
    | IAuthUser
    | IUnauthUser
    | IFetchUser;