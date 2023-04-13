import { IUserModel } from "./helpers";

export const TABLE_GET_USERS = "TABLE/GET_USERS";
export const TABLE_DELETE_USER = "TABLE/DELETE_USER";

export interface IGetUsers {
    type: typeof TABLE_GET_USERS;
    users: IUserModel[];
}

export interface IDeleteUser {
    type: typeof TABLE_DELETE_USER;
    users: IUserModel[];
}

export interface ITableReducerModel {
    readonly users: IUserModel[] | null;
}

export type TableActionTypes = 
    | IGetUsers
    | IDeleteUser;