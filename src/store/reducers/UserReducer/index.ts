import { IUserReducerModel, USER_CHECK_AUTH, USER_FETCH, USER_LOGOUT, UserActionTypes } from "./types";

export const initialState: IUserReducerModel = {
    user: null,
    auth: false
}

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_FETCH:
        case USER_LOGOUT:
        case USER_CHECK_AUTH:
            return {
                ...state,
                user: action.user,
                auth: action.auth,
            };
        default:
            return state;
    }
}