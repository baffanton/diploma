import { UserRolesEnum } from 'enums/userTypes';

export interface IUser {
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
    role: UserRolesEnum;
    auth: boolean;
}
