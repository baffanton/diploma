import { IUserReducerModel, USER_FETCH, UserActionTypes } from "./types";

export const initialState: IUserReducerModel = {
    name: null,
    surname: null,
    patronymic: null,
    profilePicture: null,
    role: null
}

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_FETCH:
            return {
                ...state,
                name: action.name,
                surname: action.surname,
                patronymic: action.patronymic,
                profilePicture: action.profilePicture,
                role: action.role,
            };
        default:
            return state;
    }
}