import { IUserReducerModel, USER_FETCH, USER_GET_TOKEN, UserActionTypes } from "./types";

export const initialState: IUserReducerModel = {
    firstname: null,
    lastname: null,
    surname: null,
    imageUrl: null,
    role: null,
    auth: false,
}

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_GET_TOKEN:
            return {
                ...state,
                auth: action.auth,
            }
        case USER_FETCH:
            return {
                ...state,
                firstname: action.firstname,
                lastname: action.surname,
                surname: action.surname,
                imageUrl: action.imageUrl,
                role: action.role,
                auth: action.auth,
            }
        default:
            return state;
    }
}