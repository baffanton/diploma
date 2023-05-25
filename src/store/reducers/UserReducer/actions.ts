import { BASE_URL, request } from "helpers/request";
import { ICheckAuth, IFetchUser, ILogoutUser, USER_CHECK_AUTH, USER_FETCH, USER_LOGOUT } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import { ILoginData } from "./helpers";
import axios from "axios";

export const fetchUser = (data: ILoginData) => (dispatch: (arg0: IFetchUser) => void) => {
    request(RequestTypesEnum.post, RequestApiEnum.authUser, data)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            const { accessToken, user } = data;
            localStorage.setItem('token', accessToken);

            dispatch({
                type: USER_FETCH,
                user: user,
                auth: true,
            })
        })
}

export const userLogout = () => (dispatch: (arg0: ILogoutUser) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.logoutUser, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            localStorage.deleteItem('token');

            dispatch({
                type: USER_LOGOUT,
                user: null,
                auth: false,
            })
        })
}

export const checkAuth = () => async (dispatch: (arg0: ICheckAuth) => void) => {
    axios.get(`${BASE_URL}/refresh`, {withCredentials: true})
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            const { user, accessToken } = data;
            localStorage.setItem('token', accessToken);

            dispatch({
                type: USER_CHECK_AUTH,
                user: user,
                auth: true,
            })
        })
}