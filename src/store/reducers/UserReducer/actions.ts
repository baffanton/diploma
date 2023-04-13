import { request } from "helpers/request";
import { IAuthUser, IFetchUser, IUnauthUser, USER_AUTH, USER_FETCH, USER_UNAUTH } from "./types";
import { UserRolesEnum } from "enums/userTypes";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import { ILoginData } from "./helpers";
import { deleteCookie, setCookie } from "helpers/cookie";

export const authUser = () => (dispatch: (arg0: IAuthUser) => void) => {
    dispatch({
        type: USER_AUTH,
        auth: true,
    })
}

export const fetchUser = (data: ILoginData, rememberData?: boolean) => (dispatch: (arg0: IFetchUser) => void) => {
    const { username, password } = data;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    dispatch({
        type: USER_FETCH,
        role: UserRolesEnum.admin,
        auth: true,
    })

    return;

    request(RequestTypesEnum.post, RequestApiEnum.getLogin, data)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            if (rememberData) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            }

            if (!rememberData) {
                setCookie("username", username);
                setCookie("password", password);
            }

            dispatch({
                type: USER_FETCH,
                role: UserRolesEnum[data as UserRolesEnum],
                auth: true,
            })
        })
}

export const unauthUser = () => (dispatch: (arg0: IUnauthUser) => void) => {
    deleteCookie("username");
    deleteCookie("password");

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    dispatch({
        type: USER_UNAUTH,
        auth: false,
        role: null
    })
}