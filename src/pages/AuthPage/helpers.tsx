import { RequestApiEnum } from "enums/requestApi";
import { RequestTypesEnum } from "enums/requestTypes";
import { getCookie, setCookie } from "helpers/cookie";
import { request } from "helpers/request";

export interface ILoginData {
    username: string;
    password: string;
}

export const logIn = (data: ILoginData, remember: boolean) => {
    request(RequestTypesEnum.post, RequestApiEnum.getLogin, data)
        .then(res => {
            const { data } = res;

            if (!data) {
                return console.log("Ошибка в запросе");
            }

            const { accessToken, refreshToken } = data;

            if (remember) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
            }

            setCookie('accessToken', accessToken);
            setCookie('refreshToken', refreshToken);
        }
    )
}

export const tryAutoLogIn = () => {
    const accessTokenFromLocalStorage = localStorage.getItem("accessToken");
    const accessTokenFromCookie = getCookie("accessToken");

    return !!accessTokenFromLocalStorage || !!accessTokenFromCookie;
}