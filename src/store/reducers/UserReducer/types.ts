import { UserRolesEnum } from 'enums/userTypes';

export const USER_FETCH = 'USER/FETCH';
export const USER_LOGIN = 'USER/LOGIN';
export const USER_LOGOUT = 'USER/LOGOUT';

export interface ILogInUser {
    type: typeof USER_LOGIN;
}

export interface IFetchUser {
    type: typeof USER_FETCH;
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
    role: UserRolesEnum;
}

export interface ILogOutUser {
    type: typeof USER_LOGOUT;
}

export interface IUserReducerModel {
    readonly firstname: string | null;
    readonly lastname: string | null;
    readonly surname: string | null;
    readonly imageUrl: string | null;
    readonly role: UserRolesEnum | null;
    readonly auth: boolean;
}

export type UserActionTypes = IFetchUser | ILogInUser | ILogOutUser;
