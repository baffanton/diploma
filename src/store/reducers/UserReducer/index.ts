import { IUserReducerModel, USER_FETCH, UserActionTypes, USER_UNAUTH } from "./types";

export const initialState: IUserReducerModel = {
    role: null,
    auth: false
}

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_UNAUTH:
        case USER_FETCH:
            return {
                ...state,
                role: action.role,
                auth: action.auth,
            };
        default:
            return state;
    }
}