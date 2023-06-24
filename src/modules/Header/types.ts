import { UserRolesEnum } from 'enums/userTypes';

export interface IHeader {
    role: UserRolesEnum;
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
}
