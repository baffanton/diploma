import {
    ITableReducerModel,
    TABLE_GET_AWARDS,
    TABLE_GET_EDUCATION,
    TABLE_GET_FINANCIAL_HELP,
    TABLE_GET_LEGAL_HELP,
    TABLE_GET_SECURITY,
    TABLE_GET_SPORT,
    TABLE_GET_USERS,
    TableActionTypes
} from "./types";

export const initialState: ITableReducerModel = {
    security: null,
    sport: null,
    users: null,
    financialHelp: null,
    legalHelp: null,
    awards: null,
    education: null,
}

export function tableReducer(state = initialState, action: TableActionTypes): ITableReducerModel {
    switch (action.type) {
        case TABLE_GET_SECURITY:
            return {
                ...state,
                security: action.security,
            };
        case TABLE_GET_SPORT:
            return {
                ...state,
                sport: action.sport,
            };
        case TABLE_GET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case TABLE_GET_FINANCIAL_HELP:
            return {
                ...state,
                financialHelp: action.financialHelp,
            };
        case TABLE_GET_LEGAL_HELP:
            return {
                ...state,
                legalHelp: action.legalHelp,
            };
        case TABLE_GET_AWARDS:
            return {
                ...state,
                awards: action.awards,
            };
        case TABLE_GET_EDUCATION:
            return {
                ...state,
                education: action.education,
            };
        default:
            return state;
    }
}