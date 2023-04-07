import { RequestTypesEnum } from "enums/requestTypes";
import { IFetchUser, USER_FETCH } from "./types";
import { RequestApiEnum } from "enums/requestApi";
import { request } from "helpers/request";
import { TokenTypesEnum } from "enums/tokenTypes";
import { UserRolesEnum } from "enums/userTypes";

export const fetchUser = () => (dispatch: (arg0: IFetchUser) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getUser, null, TokenTypesEnum.accessToken)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            const { name, surname, patronymic, profilePicture, role } = data;

            if (role === UserRolesEnum.user) {
                dispatch({
                    type: USER_FETCH,
                    name,
                    surname,
                    patronymic,
                    profilePicture,
                    role: UserRolesEnum.user
                })
            }

            dispatch({
                type: USER_FETCH,
                name,
                surname,
                patronymic,
                profilePicture,
                role: UserRolesEnum.admin
            })

            
        })
        .catch(error => {
            console.log(`Произошла ошибка: ${error}`);
        })
}