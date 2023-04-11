import { IUserReducerModel, USER_FETCH, UserActionTypes, USER_AUTH, USER_UNAUTH } from "./types";

export const initialState: IUserReducerModel = {
    name: null,
    surname: null,
    patronymic: null,
    picture: null,
    role: null,
    auth: false
}

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_AUTH:
        case USER_UNAUTH:
            return {
                ...state,
                auth: action.auth,
            };
        case USER_FETCH:
            return {
                ...state,
                name: action.name,
                surname: action.surname,
                patronymic: action.patronymic,
                picture: action.picture,
                role: action.role,
            };
        default:
            return state;
    }
}