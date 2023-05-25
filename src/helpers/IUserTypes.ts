import { UserRolesEnum } from "enums/userTypes";

export interface IUserModel {
    role: UserRolesEnum;
    name: string;
    surname: string;
    patronymic: string;
    age: number;
    email: string;
}