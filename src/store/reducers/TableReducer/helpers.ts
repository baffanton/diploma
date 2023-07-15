export interface ISecurityModel {
    userId: string;
    name: string;
    place: string;
    date: string;
    result: string;
}

export interface ISportModel {
    userId: string;
    title: string;
    sportType: string;
    date: string;
    place: string;
}

export interface IUsersModel {
    userId: string;
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
    userId: string;
    name: string;
    date: string;
    result: string;
}

export interface ILegalHelpModel {
    userId: string;
    name: string;
    date: string;
    result: string;
}

export interface IAwardsModel {
    userId: string;
    title: string;
    date: string;
    place: string;
}

export interface IEducationModel {
    userId: string;
    name: string;
    place: string;
    startDate: string;
    endDate: string;
}
