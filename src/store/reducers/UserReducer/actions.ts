import { BASE_URL, request } from "helpers/request";
import { IFetchUser, USER_FETCH } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import axios, { AxiosResponse } from "axios";
import { hideLoader, showLoader } from "../PageReducer/actions";

export const getToken = async (username: string, password: string): Promise<AxiosResponse<string>> => {
    return await axios.post(`${BASE_URL}/auth/login`, { username, password }, { withCredentials: true });
};

export const fetchUser = () => (dispatch: (arg0: (IFetchUser)) => void) => {
    // @ts-ignore
    dispatch(showLoader());

    request(RequestTypesEnum.get, RequestApiEnum.getUser, null)
        .then(response => {
            const { data } = response;

            if (!data) {
                return null;
            }

            const { firstname, lastname, surname, imageUrl, role } = data;

            dispatch({
                type: USER_FETCH,
                firstname,
                lastname,
                surname,
                imageUrl,
                role,
                auth: true
            })
        })
        .finally(() => {
            // @ts-ignore
            dispatch(hideLoader());
        })
};
