import { RequestApiEnum } from "enums/requestApi";
import { RequestTypesEnum } from "enums/requestTypes";
import { TokenTypesEnum } from "enums/tokenTypes";
import { request } from "helpers/request";

export interface ILoginData {
    username: string;
    password: string;
}

export const logIn = (data: ILoginData) => {
    // request(RequestTypesEnum.post, RequestApiEnum.getLogin, data)
    //     .then(res => {
    //         const { data } = res;

    //         if (!data) {
    //             return console.log("Ошибка в запросе");
    //         }

    //         const { accessToken, refreshToken } = data;
    //         localStorage.setItem('accessToken', accessToken);
    //         localStorage.setItem('refreshToken', refreshToken);
    //     }
    // )

    request(RequestTypesEnum.get, RequestApiEnum.test, null, TokenTypesEnum.accessToken)
        .then(res => {
            const { data } = res;

            if (!data) {
                return console.log("Ошибка в запросе");
            }

            const { accessToken, refreshToken } = data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        }
    )
}