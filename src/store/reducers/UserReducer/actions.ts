import { request } from "helpers/request";
import { IFetchUser, IGetToken, USER_FETCH } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import { UserRolesEnum } from "enums/userTypes";

export const getToken = (username: string, password: string) => async (dispatch: (arg0: (IGetToken)) => void) => {
    return await request(RequestTypesEnum.post, RequestApiEnum.authUser, { username, password });
}

export const fetchUser = () => (dispatch: (arg0: IFetchUser) => void) => {
    dispatch({
        type: USER_FETCH,
        firstname: "Антон",
        lastname: "Баяндин",
        surname: "Викторович",
        role: UserRolesEnum.admin,
        imageUrl: "https://kartinkin.net/pics/uploads/posts/2022-07/1658423332_24-kartinkin-net-p-yashcheritsa-kavkazskaya-zhivotnie-krasivo-28.jpg",
        auth: true,
    })
    return;
    request(RequestTypesEnum.get, RequestApiEnum.getUser, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            const { firstname, lastname, surname, role, imageUrl } = data;

            dispatch({
                type: USER_FETCH,
                firstname,
                lastname,
                surname,
                role,
                imageUrl,
                auth: true,
            });
        })
        .catch(errors => {
            console.log(errors);
        });
}
