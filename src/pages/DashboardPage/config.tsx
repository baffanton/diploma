import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { RequestApiEnum } from "enums/requestApi";
import { usersConfig } from './tableConfigs/users';
import { ITableColumn } from "helpers/tableConfigTypes";
import { awardsConfig } from "./tableConfigs/awards";
import { eventsConfig } from "./tableConfigs/events";
import { userAwardsConfig } from "./tableConfigs/userAwards";
import { userEventsConfig } from "./tableConfigs/userEvents";

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
        exportUrl: RequestApiEnum.awardsExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.education,
        title: "Мероприятия",
        tableConfig: eventsConfig,
        url: DashboardPagesUrlEnum.education,
        exportUrl: RequestApiEnum.eventsExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.financialHelp,
        title: "Награды пользователей",
        tableConfig: userAwardsConfig,
        url: DashboardPagesUrlEnum.financialHelp,
        exportUrl: RequestApiEnum.userAwardsExport,
        isClickable: false
    },
    {
        id: DashboardPagesUrlEnum.legalHelp,
        title: "Мероприятия пользователей",
        tableConfig: userEventsConfig,
        url: DashboardPagesUrlEnum.legalHelp,
        exportUrl: RequestApiEnum.userEventsExport,
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