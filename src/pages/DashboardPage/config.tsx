import { DashboardPagesUrlEnum } from "enums/dashboardPages";

export interface IDashboardPage {
    id: DashboardPagesUrlEnum;
    title: string;
    exportFunction: any;
    tableConfig: any;
    url: DashboardPagesUrlEnum;
}

export const DashboardPagesConfig: IDashboardPage[] = [
    {
        id: DashboardPagesUrlEnum.awards,
        title: "Награждения",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.awards,
    },
    {
        id: DashboardPagesUrlEnum.education,
        title: "Обучение",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.education
    },
    {
        id: DashboardPagesUrlEnum.financialHelp,
        title: "Материальная помощь",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.financialHelp
    },
    {
        id: DashboardPagesUrlEnum.legalHelp,
        title: "Юридическая помощь",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.legalHelp
    },
    {
        id: DashboardPagesUrlEnum.members,
        title: "Участники",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.members
    },
    {
        id: DashboardPagesUrlEnum.osha,
        title: "Охрана труда",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.osha
    },
    {
        id: DashboardPagesUrlEnum.sport,
        title: "Спортивная жизнь",
        exportFunction: null,
        tableConfig: null,
        url: DashboardPagesUrlEnum.sport
    },
]