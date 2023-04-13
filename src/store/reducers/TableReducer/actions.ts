import { request } from "helpers/request"
import { IDeleteUser, IGetUsers, TABLE_DELETE_USER, TABLE_GET_USERS } from "./types"
import { RequestTypesEnum } from "enums/requestTypes"
import { RequestApiEnum } from "enums/requestApi";

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

export const deleteUser = (id: string) => (dispatch: (arg0: IDeleteUser) => void) => {
    request(RequestTypesEnum.get, `${RequestApiEnum.deleteUser}/${id}`, null)
        .then(res => {
            const { data } = res;

            if (!data) {
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