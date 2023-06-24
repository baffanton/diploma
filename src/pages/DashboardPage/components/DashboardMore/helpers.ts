import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { Dispatch } from 'react';
import {
    IAwardsModel,
    IEducationModel,
    IFinancialHelpModel,
    ILegalHelpModel,
    ISecurityModel,
    ISportModel,
    IUsersModel,
} from 'store/reducers/TableReducer/helpers';
import {
    IFetchAwards,
    IFetchEducation,
    IFetchFinancialHelp,
    IFetchLegalHelp,
    IFetchSecurity,
    IFetchSport,
    IFetchUsers,
} from 'store/reducers/TableReducer/types';

const getTableDataByPageId = (
    id: DashboardPagesUrlEnum,
    security: ISecurityModel[],
    sport: ISportModel[],
    users: IUsersModel[],
    financialHelp: IFinancialHelpModel[],
    legalHelp: ILegalHelpModel[],
    awards: IAwardsModel[],
    education: IEducationModel[],
):
    | ISecurityModel[]
    | ISportModel[]
    | IUsersModel[]
    | IFinancialHelpModel[]
    | ILegalHelpModel[]
    | IAwardsModel[]
    | IEducationModel[] => {
    switch (id) {
        case DashboardPagesUrlEnum.security:
            return security;
        case DashboardPagesUrlEnum.sport:
            return sport;
        case DashboardPagesUrlEnum.users:
            return users;
        case DashboardPagesUrlEnum.financialHelp:
            return financialHelp;
        case DashboardPagesUrlEnum.legalHelp:
            return legalHelp;
        case DashboardPagesUrlEnum.awards:
            return awards;
        case DashboardPagesUrlEnum.education:
            return education;
        default:
            return [];
    }
};

const fetchDataByPageId = (
    id: DashboardPagesUrlEnum,
    fetchSecurity: () => Dispatch<IFetchSecurity>,
    fetchSport: () => Dispatch<IFetchSport>,
    fetchUsers: () => Dispatch<IFetchUsers>,
    fetchFinancialHelp: () => Dispatch<IFetchFinancialHelp>,
    fetchLegalHelp: () => Dispatch<IFetchLegalHelp>,
    fetchAwards: () => Dispatch<IFetchAwards>,
    fetchEducation: () => Dispatch<IFetchEducation>,
) => {
    switch (id) {
        case DashboardPagesUrlEnum.security:
            return fetchSecurity();
        case DashboardPagesUrlEnum.sport:
            return fetchSport();
        case DashboardPagesUrlEnum.users:
            return fetchUsers();
        case DashboardPagesUrlEnum.financialHelp:
            return fetchFinancialHelp();
        case DashboardPagesUrlEnum.legalHelp:
            return fetchLegalHelp();
        case DashboardPagesUrlEnum.awards:
            return fetchAwards();
        case DashboardPagesUrlEnum.education:
            return fetchEducation();
        default:
            return null;
    }
};

export { getTableDataByPageId, fetchDataByPageId };
