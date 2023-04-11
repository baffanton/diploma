import { RequestTypesEnum } from "enums/requestTypes";
import { IAuthUser, IFetchUser, IUnauthUser, USER_AUTH, USER_FETCH, USER_UNAUTH } from "./types";
import { RequestApiEnum } from "enums/requestApi";
import { request } from "helpers/request";
import { TokenTypesEnum } from "enums/tokenTypes";
import { UserRolesEnum } from "enums/userTypes";

export const authUser = () => (dispatch: (arg0: IAuthUser) => void) => {
    dispatch({
        type: USER_AUTH,
        auth: true,
    })
}

export const unauthUser = () => (dispatch: (arg0: IUnauthUser) => void) => {
    dispatch({
        type: USER_UNAUTH,
        auth: false,
    })
}

export const fetchUser = () => (dispatch: (arg0: IFetchUser) => void) => {
    dispatch({
        type: USER_FETCH,
        name: "Антон",
        surname: "Баяндин",
        patronymic: "Викторович",
        picture: "https://snappygoat.com/b/8b34e326b7d1fdc739b28c8cb2f81a9ef65778a4",
        role: UserRolesEnum.admin
    })

    // request(RequestTypesEnum.get, RequestApiEnum.getUser, null, TokenTypesEnum.accessToken)
    //     .then(res => {
    //         const { data } = res;

    //         if (!data) {
    //             return null;
    //         }

    //         const { name, surname, patronymic, picture, role } = data;

    //         if (role === UserRolesEnum.user) {
    //             dispatch({
    //                 type: USER_FETCH,
    //                 name,
    //                 surname,
    //                 patronymic,
    //                 picture,
    //                 role: UserRolesEnum.user
    //             })
    //         }

    //         dispatch({
    //             type: USER_FETCH,
    //             name,
    //             surname,
    //             patronymic,
    //             picture,
    //             role: UserRolesEnum.admin
    //         })

            
    //     })
    //     .catch(error => {
    //         console.log(`Произошла ошибка: ${error}`);
    //     })
}