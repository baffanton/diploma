import { request } from "helpers/request";
import { IFetchUser, ILogoutUser, USER_FETCH, USER_LOGOUT } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import { ILoginData } from "./helpers";
import { UserRolesEnum } from "enums/userTypes";

export const fetchUser = (data: ILoginData) => (dispatch: (arg0: IFetchUser) => void) => {
    dispatch({
        type: USER_FETCH,
        name: "Антон",
        surname: "Баяндин",
        patronymic: "Викторович",
        picture: "https://kartinkin.net/uploads/posts/2022-03/1646391262_42-kartinkin-net-p-kartinki-yashcheritsi-53.jpg",
        role: UserRolesEnum.admin, 
        auth: true,
    })
    // request(RequestTypesEnum.post, RequestApiEnum.authUser, data)
    //     .then(res => {
    //         const { data } = res;

    //         if (!data) {
    //             return null;
    //         }

    //         const { name, surname, patronymic, picture, role } = data;

    //         dispatch({
    //             type: USER_FETCH,
    //             name,
    //             surname,
    //             patronymic,
    //             picture,
    //             role, 
    //             auth: true,
    //         })
    //     })
}

export const userLogout = () => (dispatch: (arg0: ILogoutUser) => void) => {
    // request(RequestTypesEnum.get, RequestApiEnum.logoutUser, null)
    //     .then(res => {
    //         const { data } = res;

    //         if (!data) {
    //             return null;
    //         }

    //         localStorage.deleteItem('token');

    //         dispatch({
    //             type: USER_LOGOUT,
    //             user: null,
    //             auth: false,
    //         })
    //     })
}