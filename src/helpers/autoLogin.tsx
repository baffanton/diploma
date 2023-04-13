import { getCookie } from "helpers/cookie";
import { fetchUser } from "store/reducers/UserReducer/actions";

export const tryAutoLogIn = (dispatch: any) => {
    const loginFromLocalStorage = localStorage.getItem("username");
    const passwordFromLocalStorage = localStorage.getItem("password");

    if (loginFromLocalStorage && passwordFromLocalStorage) {
        const data = {
            username: loginFromLocalStorage,
            password: passwordFromLocalStorage
        }

        // @ts-ignore
        return dispatch(fetchUser(data));
    }

    const loginFromCookie = getCookie("username");
    const passwordFromCookie = getCookie("password");

    if (loginFromCookie && passwordFromCookie) {
        const data = {
            username: loginFromCookie,
            password: passwordFromCookie
        }

        // @ts-ignore
        return dispatch(fetchUser(data));
    }

    return null;
}