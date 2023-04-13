import { ITableReducerModel, TABLE_DELETE_USER, TABLE_GET_USERS, TABLE_ADD_USER, TableActionTypes, TABLE_EDIT_USER, TABLE_GET_AWARDS, TABLE_GET_EVENTS, TABLE_GET_USER_EVENTS, TABLE_GET_USER_AWARDS } from "./types";

export const initialState: ITableReducerModel = {
    users: null,
    awards: null,
    events: null,
    userEvents: null,
    userAwards: null,
}

export function tableRecuder(state = initialState, action: TableActionTypes): ITableReducerModel {
    switch (action.type) {
        case TABLE_GET_USERS:
        case TABLE_DELETE_USER:
        case TABLE_ADD_USER:
        case TABLE_EDIT_USER:
            return {
                ...state,
                users: action.users
            };
        case TABLE_GET_AWARDS:
            return {
                ...state,
                awards: action.awards
            }
        case TABLE_GET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case TABLE_GET_USER_EVENTS:
            return {
                ...state,
                userEvents: action.userEvents
            }
        case TABLE_GET_USER_AWARDS:
            return {
                ...state,
                userAwards: action.userAwards
            }
        default:
            return state;
    }
}