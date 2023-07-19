import { IUserReducerModel, USER_FETCH, USER_LOGIN, USER_LOGOUT, UserActionTypes } from './types';

export const initialState: IUserReducerModel = {
    firstname: null,
    lastname: null,
    surname: null,
    imageUrl: null,
    role: null,
    auth: false,
};

export function userRecuder(state = initialState, action: UserActionTypes): IUserReducerModel {
    switch (action.type) {
        case USER_FETCH:
            return {
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
                surname: action.surname,
                imageUrl: action.imageUrl,
                role: action.role,
                auth: true,
            };
        case USER_LOGIN:
            return {
                ...state,
                auth: true,
            };
        case USER_LOGOUT:
            return {
                ...state,
                firstname: '',
                lastname: '',
                surname: '',
                imageUrl: '',
                role: null,
                auth: false,
            };
        default:
            return state;
    }
}
