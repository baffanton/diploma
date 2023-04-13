import { ITableReducerModel, TABLE_DELETE_USER, TABLE_GET_USERS, TableActionTypes } from "./types";

export const initialState: ITableReducerModel = {
    users: null
}

export function tableRecuder(state = initialState, action: TableActionTypes): ITableReducerModel {
    switch (action.type) {
        case TABLE_GET_USERS:
        case TABLE_DELETE_USER:
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
}