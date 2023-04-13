import { request } from "helpers/request"
import { IAddUser, IDeleteUser, IGetUsers, TABLE_DELETE_USER, TABLE_GET_USERS, TABLE_ADD_USER, IEditUser, TABLE_EDIT_USER, IGetAwards, TABLE_GET_AWARDS, IGetEvents, TABLE_GET_EVENTS, IGetUserEvents, TABLE_GET_USER_EVENTS, IGetUserAwards, TABLE_GET_USER_AWARDS } from "./types"
import { RequestTypesEnum } from "enums/requestTypes"
import { RequestApiEnum } from "enums/requestApi";
import { IUserModel } from "./helpers";

export const fetchUsers = () => (dispatch: (arg0: IGetUsers) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getUsers, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_USERS,
                users: data,
            })
        })
}

export const fetchAwards = () => (dispatch: (arg0: IGetAwards) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getAwards, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_AWARDS,
                awards: data,
            })
        })
}

export const fetchEvents = () => (dispatch: (arg0: IGetEvents) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getEvents, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_EVENTS,
                events: data,
            })
        })
}

export const fetchUserEvents = () => (dispatch: (arg0: IGetUserEvents) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getUserEvents, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_USER_EVENTS,
                userEvents: data,
            })
        })
}

export const fetchUserAwards = () => (dispatch: (arg0: IGetUserAwards) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getUserAwards, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_USER_AWARDS,
                userAwards: data,
            })
        })
}

export const deleteUser = (id: string) => (dispatch: (arg0: IDeleteUser) => void) => {
    request(RequestTypesEnum.post, `${RequestApiEnum.deleteUser}/${id}`, null)
        .then(res => {
            const { status } = res;

            if (status !== 200) {
                return null;
            }

            request(RequestTypesEnum.get, RequestApiEnum.getUsers, null)
                .then(res => {
                    const { data } = res;

                    if (!data) {
                        return null;
                    }

                    dispatch({
                        type: TABLE_DELETE_USER,
                        users: data,
                    })
                })
        })
}

export const addUser = (model: IUserModel) => (dispatch: (arg0: IAddUser) => void) => {
    const { username } = model;

    request(RequestTypesEnum.get, `${RequestApiEnum.userIsExist}/${username}`, null)
        .then(res => {
            const { data } = res;

            if (data) {
                return null;
            }

            request(RequestTypesEnum.post, RequestApiEnum.addUser, model)
                .then(res => {
                    const { status } = res;

                    if (status !== 201) {
                        return null;
                    }

                    request(RequestTypesEnum.get, RequestApiEnum.getUsers, null)
                        .then(res => {
                            const { data } = res;

                            if (!data) {
                                return null;
                            }

                            dispatch({
                                type: TABLE_ADD_USER,
                                users: data,
                            })
                        })
                })
        })
    
}

export const editUser = (model: IUserModel) => (dispatch: (arg0: IEditUser) => void) => {
    request(RequestTypesEnum.post, RequestApiEnum.editUser, model)
        .then(res => {
            const { status } = res;

            if (status !== 201) {
                return null;
            }

            request(RequestTypesEnum.get, RequestApiEnum.getUsers, null)
                .then(res => {
                    const { data } = res;

                    if (!data) {
                        return null;
                    }

                    dispatch({
                        type: TABLE_EDIT_USER,
                        users: data,
                    })
                })
        })
    
}