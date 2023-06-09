import { request } from "helpers/request";
import { IFetchUser, IGetToken, USER_FETCH } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";

export const getToken = (username: string, password: string) => async (dispatch: (arg0: (IGetToken)) => void) => {
    return await request(RequestTypesEnum.post, RequestApiEnum.authUser, { username, password });
}

export const fetchUser = () => (dispatch: (arg0: IFetchUser) => void) => {
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
