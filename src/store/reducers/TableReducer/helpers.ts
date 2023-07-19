export interface ISecurityModel {
    id: string;
    name: string;
    place: string;
    date: string;
    result: string;
}

export interface ISportModel {
    id: string;
    title: string;
    sportType: string;
    date: string;
    place: string;
}

export interface IUsersModel {
    id: string;
    firstname: string;
    lastname: string;
    surname: string;
    placement: string;
    position: string;
    phone: string;
    username: string;
    password: string;
}

export interface IFinancialHelpModel {
    id: string;
    name: string;
    date: string;
    result: string;
}

export interface ILegalHelpModel {
    id: string;
    name: string;
    date: string;
    result: string;
}

export interface IAwardsModel {
    id: string;
    title: string;
    date: string;
    place: string;
}

export interface IEducationModel {
    id: string;
    name: string;
    place: string;
    startDate: string;
    endDate: string;
}
