import { UserRolesEnum } from "enums/userTypes";

export const USER_FETCH = 'USER/GET';

export interface IFetchUser {
    type: typeof USER_FETCH;
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
    role: UserRolesEnum;
    auth: boolean;
}

export interface IUserReducerModel {
    readonly firstname: string | null;
    readonly lastname: string | null;
    readonly surname: string | null;
    readonly imageUrl: string | null;
    readonly role: UserRolesEnum | null;
    readonly auth: boolean;
}

export type UserActionTypes = 
    | IFetchUser;