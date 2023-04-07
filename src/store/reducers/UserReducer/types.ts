import { UserRolesEnum } from "enums/userTypes";

export const USER_FETCH = 'USER/GET';

export interface IFetchUser {
    type: typeof USER_FETCH;
    name: string;
    surname: string;
    patronymic: string;
    profilePicture: string;
    role: UserRolesEnum;
}

export interface IUserReducerModel {
    readonly name: string | null;
    readonly surname: string | null;
    readonly patronymic: string | null;
    readonly profilePicture: string | null;
    readonly role: UserRolesEnum | null;
}

export type UserActionTypes = 
    | IFetchUser;