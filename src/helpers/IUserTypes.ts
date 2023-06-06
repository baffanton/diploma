import { UserRolesEnum } from "enums/userTypes";

export interface IUserModel {
    name: string;
    surname: string;
    patronymic: string;
    role: UserRolesEnum;
    picture: string;
}