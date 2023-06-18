import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { RequestApiEnum } from "enums/requestApi";
import { usersConfig } from './tableConfigs/users';
import { ITableColumn } from "helpers/tableConfigTypes";
import { awardsConfig } from "./tableConfigs/awards";
import { eventsConfig } from "./tableConfigs/events";
import { userAwardsConfig } from "./tableConfigs/userAwards";
import { userEventsConfig } from "./tableConfigs/userEvents";
import { sportConfig } from "./tableConfigs/sport";

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
        exportUrl: RequestApiEnum.getAwards,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.education,
        title: "Образование",
        tableConfig: eventsConfig,
        url: DashboardPagesUrlEnum.education,
        exportUrl: RequestApiEnum.getEducation,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.financialHelp,
        title: "Материальная помощь",
        tableConfig: userAwardsConfig,
        url: DashboardPagesUrlEnum.financialHelp,
        exportUrl: RequestApiEnum.getFinancialHelp,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.legalHelp,
        title: "Юридическая помощь",
        tableConfig: userEventsConfig,
        url: DashboardPagesUrlEnum.legalHelp,
        exportUrl: RequestApiEnum.getLegalHelp,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.users,
        title: "Участники",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.users,
        exportUrl: RequestApiEnum.getUsers,
        isClickable: true
    },
    {
        id: DashboardPagesUrlEnum.security,
        title: "Охрана труда",
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.security,
        exportUrl: RequestApiEnum.getSecurity,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.sport,
        title: "Спортивная жизнь",
        tableConfig: sportConfig,
        url: DashboardPagesUrlEnum.sport,
        exportUrl: RequestApiEnum.getSport,
        isClickable: false
    },
]