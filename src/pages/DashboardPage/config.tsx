import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { RequestApiEnum } from "enums/requestApi";
import { usersConfig } from './tableConfigs/users';
import { ITableColumn } from "helpers/tableConfigTypes";
import { awardsConfig } from "./tableConfigs/awards";

export interface IDashboardPage {
    id: DashboardPagesUrlEnum;
    title: string;
    tableConfig: ITableColumn[];
    url: DashboardPagesUrlEnum;
    exportUrl: RequestApiEnum;
    isClickable: boolean;
}

export const DashboardPagesConfig: IDashboardPage[] = [
    {
        id: DashboardPagesUrlEnum.awards,
        title: "Награждения",
        tableConfig: awardsConfig,
        url: DashboardPagesUrlEnum.awards,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.education,
        title: "Обучение",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.education,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.financialHelp,
        title: "Материальная помощь",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.financialHelp,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.legalHelp,
        title: "Юридическая помощь",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.legalHelp,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.users,
        title: "Участники",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.users,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: true
    },
    {
        id: DashboardPagesUrlEnum.osha,
        title: "Охрана труда",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.osha,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.sport,
        title: "Спортивная жизнь",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.sport,
        exportUrl: RequestApiEnum.usersExport,
        isClickable: false
    },
]