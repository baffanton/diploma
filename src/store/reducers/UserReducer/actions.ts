import { BASE_URL, request } from "helpers/request";
import { IFetchUser, USER_FETCH } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import axios, { AxiosResponse } from "axios";
import { hideLoader, showLoader } from "../PageReducer/actions";
import { Dispatch } from "react";

export const getToken = async (username: string, password: string): Promise<AxiosResponse<string>> => {
    return await axios.post(`${BASE_URL}/auth/login`, { username, password }, { withCredentials: true });
};

export const fetchUser = () => async (dispatch: Dispatch<any>): Promise<AxiosResponse<void>> => {
    return await request(RequestTypesEnum.get, RequestApiEnum.getUser, null);
};
