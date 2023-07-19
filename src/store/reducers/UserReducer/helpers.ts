import { UserRolesEnum } from 'enums/userTypes';

export interface IUser {
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
    role: UserRolesEnum;
    auth: boolean;
}

export interface IUserData {
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
    role: UserRolesEnum;
}

export interface ILogInResponse {
    accessToken: string;
    user: IUserData;
}
