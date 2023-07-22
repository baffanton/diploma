import { Dispatch } from 'react';
import { TableDataTypes } from './types';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { replace } from 'helpers/replace';
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
): TableDataTypes => {
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

const getHeaderConfigByPageId = (id: DashboardPagesUrlEnum): string[] => {
    switch (id) {
        case DashboardPagesUrlEnum.users:
            return ['Фамилия', 'Имя', 'Отчество', 'Место работы', 'Должность', 'Номер телефона'];
        case DashboardPagesUrlEnum.awards:
            return ['Мероприятие', 'Дата', 'Результат'];
        case DashboardPagesUrlEnum.education:
            return ['Сотрудник', 'Место учебы', 'Год начала', 'Год окончания'];
        case DashboardPagesUrlEnum.financialHelp:
        case DashboardPagesUrlEnum.legalHelp:
            return ['Сотрудник', 'Дата обращения', 'Результат'];
        case DashboardPagesUrlEnum.security:
            return ['Сотрудник', 'Место проверки', 'Дата', 'Результат'];
        case DashboardPagesUrlEnum.sport:
            return ['Событие', 'Вид спорта', 'Дата'];
    }
};

const getBodyConfigByPageId = (id: DashboardPagesUrlEnum, tableData: TableDataTypes | []) => {
    switch (id) {
        case DashboardPagesUrlEnum.users: {
            return tableData.map((item) => {
                const { lastname, firstname, surname, workPlace, position, phone } = item;

                return { lastname, firstname, surname, workPlace, position, phone };
            });
        }
        case DashboardPagesUrlEnum.awards: {
            return tableData.map((item) => {
                const { title, date, result } = item;

                return { title, date, result };
            });
        }
        case DashboardPagesUrlEnum.education: {
            return tableData.map((item) => {
                const { name, place, startYear, endYear } = item;

                return { name, place, startYear, endYear };
            });
        }
        case DashboardPagesUrlEnum.financialHelp:
        case DashboardPagesUrlEnum.legalHelp: {
            return tableData.map((item) => {
                const { name, date, result } = item;

                return { name, date, result };
            });
        }
        case DashboardPagesUrlEnum.security: {
            return tableData.map((item) => {
                const { name, place, date, result } = item;

                return { name, place, date, result };
            });
        }
        case DashboardPagesUrlEnum.sport: {
            return tableData.map((item) => {
                const { title, sportType, date } = item;

                return { title, sportType, date };
            });
        }
    }
};

const getFileNameByPageId = (id: DashboardPagesUrlEnum) => {
    const currentDate = new Date().toLocaleDateString();

    switch (id) {
        case DashboardPagesUrlEnum.users:
            return `Пользователи от ${replace(currentDate, '.', '-')}`;
        case DashboardPagesUrlEnum.awards:
            return `Награждения от ${replace(currentDate, '.', '-')}`;
        case DashboardPagesUrlEnum.education:
            return `Образование от ${replace(currentDate, '.', '-')}`;
        case DashboardPagesUrlEnum.financialHelp:
            return `Материальная помощь от ${replace(currentDate, '.', '-')}`;
        case DashboardPagesUrlEnum.legalHelp:
            return `Юридическая помощь от ${replace(currentDate, '.', '-')}`;
        case DashboardPagesUrlEnum.security:
            return `Охрана труда от ${replace(currentDate, '.', '-')}`;
        case DashboardPagesUrlEnum.sport:
            return `Спортивная жизнь от ${replace(currentDate, '.', '-')}`;
    }
};

export { getTableDataByPageId, fetchDataByPageId, getHeaderConfigByPageId, getBodyConfigByPageId, getFileNameByPageId };
