import { IAwardsModel, IEventsModel, IUserAwardsModel, IUserEventsModel, IUserModel } from "./helpers";

export const TABLE_GET_USERS = "TABLE/GET_USERS";
export const TABLE_GET_AWARDS = "TABLE/GET_AWARDS";
export const TABLE_GET_EVENTS = "TABLE/GET_EVENTS";
export const TABLE_DELETE_USER = "TABLE/DELETE_USER";
export const TABLE_ADD_USER = "TABLE/ADD_USER";
export const TABLE_EDIT_USER = "TABLE/EDIT_USER";
export const TABLE_GET_USER_EVENTS = "TABLE/GET_USER_EVENTS";
export const TABLE_GET_USER_AWARDS = "TABLE/GET_USER_AWARDS";

export interface IGetUsers {
    type: typeof TABLE_GET_USERS;
    users: IUserModel[];
}

export interface IDeleteUser {
    type: typeof TABLE_DELETE_USER;
    users: IUserModel[];
}

export interface IAddUser {
    type: typeof TABLE_ADD_USER;
    users: IUserModel[];
}

export interface IEditUser {
    type: typeof TABLE_EDIT_USER;
    users: IUserModel[];
}

export interface IGetAwards {
    type: typeof TABLE_GET_AWARDS;
    awards: IAwardsModel[];
}

export interface IGetEvents {
    type: typeof TABLE_GET_EVENTS;
    events: IEventsModel[];
}

export interface IGetUserEvents {
    type: typeof TABLE_GET_USER_EVENTS;
    userEvents: IUserEventsModel[];
}

export interface IGetUserAwards {
    type: typeof TABLE_GET_USER_AWARDS;
    userAwards: IUserAwardsModel[];
}

export interface ITableReducerModel {
    readonly users: IUserModel[] | null;
    readonly awards: IAwardsModel[] | null;
    readonly events: IEventsModel[] | null;
    readonly userEvents: IUserEventsModel[] | null;
    readonly userAwards: IUserAwardsModel[] | null;
}

export type TableActionTypes = 
    | IGetUsers
    | IDeleteUser
    | IAddUser
    | IEditUser
    | IGetAwards
    | IGetEvents
    | IGetUserEvents
    | IGetUserAwards;