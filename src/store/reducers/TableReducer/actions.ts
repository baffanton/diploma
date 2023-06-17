import { request } from "helpers/request";
import { IFetchAwards, IFetchEducation, IFetchFinancialHelp, IFetchLegalHelp, IFetchSecurity, IFetchSport, IFetchUsers, TABLE_GET_AWARDS, TABLE_GET_EDUCATION, TABLE_GET_FINANCIAL_HELP, TABLE_GET_LEGAL_HELP, TABLE_GET_SECURITY, TABLE_GET_SPORT, TABLE_GET_USERS } from "./types";
import { RequestTypesEnum } from "enums/requestTypes";
import { RequestApiEnum } from "enums/requestApi";
import { IAddUserDataModel } from "pages/DashboardPage/components/DashboardMore/types";
import { AxiosResponse } from "axios";

export const fetchSecurity = () => (dispatch: (arg0: (IFetchSecurity)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getSecurity, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_SECURITY,
                security: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchSport = () => (dispatch: (arg0: (IFetchSport)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getSport, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_SPORT,
                sport: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchUsers = () => (dispatch: (arg0: (IFetchUsers)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableUsers, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_USERS,
                users: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchFinancialHelp = () => (dispatch: (arg0: (IFetchFinancialHelp)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getFinancialHelp, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_FINANCIAL_HELP,
                financialHelp: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchLegalHelp = () => (dispatch: (arg0: (IFetchLegalHelp)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getLegalHelp, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_LEGAL_HELP,
                legalHelp: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchAwards = () => (dispatch: (arg0: (IFetchAwards)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getAwards, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_AWARDS,
                awards: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const fetchEducation = () => (dispatch: (arg0: (IFetchEducation)) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getEducation, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_EDUCATION,
                education: data,
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const deleteUser = async (id: string): Promise<AxiosResponse<void>> => {
    return await request(RequestTypesEnum.delete, `${RequestApiEnum.deleteUser}${id}`, null);
}

export const addUser = async (data: IAddUserDataModel): Promise<AxiosResponse<void>> => {
    return await request(RequestTypesEnum.post, RequestApiEnum.addUser, data);
}