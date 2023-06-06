import { IUserReducerModel, USER_CHECK_AUTH, USER_FETCH, USER_LOGOUT, UserActionTypes } from "./types";

export const initialState: IUserReducerModel = {
    name: null,
    surname: null,
    patronymic: null,
    picture: null,
    role: null,
    auth: null,
}

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_FETCH:
        case USER_LOGOUT:
            return {
                ...state,
                auth: action.auth,
                name: action.name,
                surname: action.surname,
                patronymic: action.patronymic,
                picture: action.picture,
                role: action.role,
            }
        default:
            return state;
    }
}