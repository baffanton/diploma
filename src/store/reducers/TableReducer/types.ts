import { IAwardsModel, IEducationModel, IFinancialHelpModel, ILegalHelpModel, ISecurityModel, ISportModel, IUsersModel } from "./helpers";

export const TABLE_GET_SECURITY = "TABLE/GET_SECURITY";
export const TABLE_GET_SPORT = "TABLE/GET_SPORT";
export const TABLE_GET_USERS = "TABLE/GET_USERS";
export const TABLE_GET_FINANCIAL_HELP = "TABLE/GET_FINANCIAL_HELP";
export const TABLE_GET_LEGAL_HELP = "TABLE/GET_LEGAL_HELP";
export const TABLE_GET_AWARDS = "TABLE/GET_AWARDS";
export const TABLE_GET_EDUCATION = "TABLE/GET_EDUCATION";

export interface IFetchSecurity {
    type: typeof TABLE_GET_SECURITY;
    security: ISecurityModel;
}

export interface IFetchSport {
    type: typeof TABLE_GET_SPORT;
    sport: ISportModel;
}

export interface IFetchUsers {
    type: typeof TABLE_GET_USERS;
    users: IUsersModel;
}

export interface IFetchFinancialHelp {
    type: typeof TABLE_GET_FINANCIAL_HELP;
    financialHelp: IFinancialHelpModel;
}

export interface IFetchLegalHelp {
    type: typeof TABLE_GET_LEGAL_HELP;
    legalHelp: ILegalHelpModel;
}

export interface IFetchAwards {
    type: typeof TABLE_GET_AWARDS;
    awards: IAwardsModel;
}

export interface IFetchEducation {
    type: typeof TABLE_GET_EDUCATION;
    education: IEducationModel;
}

export interface ITableReducerModel {
    readonly security: ISecurityModel | null;
    readonly sport: ISportModel | null;
    readonly users: IUsersModel | null;
    readonly financialHelp: IFinancialHelpModel | null;
    readonly legalHelp: ILegalHelpModel | null;
    readonly awards: IAwardsModel | null;
    readonly education: IEducationModel | null;
}

export type TableActionTypes =
    | IFetchSecurity
    | IFetchSport
    | IFetchUsers
    | IFetchFinancialHelp
    | IFetchLegalHelp
    | IFetchAwards
    | IFetchEducation;