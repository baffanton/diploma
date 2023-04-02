import { RequestApiEnum } from "enums/requestApi";
import { RequestTypesEnum } from "enums/requestTypes";
import { request } from "helpers/request";

export interface ILoginData {
    username: string;
    password: string;
}

export const getLoginUser = (data: ILoginData) => {
    request(RequestTypesEnum.post, RequestApiEnum.getLogin, data)
        .then(res => {
            const { data } = res;

            if (!data) {
                return console.log("Ошибка в запросе");
            }

            const { token } = data;
            localStorage.setItem('access_token', token);
        })
}