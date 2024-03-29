import { IChangeUserDataModel } from 'components/core/Modal/components/ChangeUser/types';
import {
    IFetchAwards,
    IFetchEducation,
    IFetchFinancialHelp,
    IFetchLegalHelp,
    IFetchSecurity,
    IFetchSport,
    IFetchUsers,
    TABLE_GET_AWARDS,
    TABLE_GET_EDUCATION,
    TABLE_GET_FINANCIAL_HELP,
    TABLE_GET_LEGAL_HELP,
    TABLE_GET_SECURITY,
    TABLE_GET_SPORT,
    TABLE_GET_USERS,
} from './types';
import { AxiosResponse } from 'axios';
import { RequestApiEnum } from 'enums/requestApi';
import { RequestTypesEnum } from 'enums/requestTypes';
import { request } from 'helpers/request';

export const fetchSecurity = () => (dispatch: (arg0: IFetchSecurity) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableSecurity, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_SECURITY,
                security: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchSport = () => (dispatch: (arg0: IFetchSport) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableSport, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_SPORT,
                sport: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchUsers = () => (dispatch: (arg0: IFetchUsers) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableUsers, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_USERS,
                users: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchFinancialHelp = () => (dispatch: (arg0: IFetchFinancialHelp) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableFinancialHelp, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_FINANCIAL_HELP,
                financialHelp: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchLegalHelp = () => (dispatch: (arg0: IFetchLegalHelp) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableLegalHelp, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_LEGAL_HELP,
                legalHelp: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchAwards = () => (dispatch: (arg0: IFetchAwards) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableAwards, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_AWARDS,
                awards: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchEducation = () => (dispatch: (arg0: IFetchEducation) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.tableEducation, null)
        .then((res) => {
            const { data } = res;

            if (!data) {
                return null;
            }

            dispatch({
                type: TABLE_GET_EDUCATION,
                education: data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteUser = async (id: string): Promise<AxiosResponse<void>> => {
    return await request(RequestTypesEnum.delete, `${RequestApiEnum.deleteUser}/${id}`, null);
};

export const addUser = async (id: string, data: IChangeUserDataModel): Promise<AxiosResponse<void>> => {
    const newUser = {
        id,
        ...data,
    };

    return await request(RequestTypesEnum.post, RequestApiEnum.addUser, newUser);
};

export const editUser = async (id: string, data: IChangeUserDataModel): Promise<AxiosResponse<void>> => {
    return await request(RequestTypesEnum.put, `${RequestApiEnum.editUser}/${id}`, data);
};
