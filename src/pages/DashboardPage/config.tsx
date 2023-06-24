import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { usersConfig } from './tableConfigs/users';
import { awardsConfig } from './tableConfigs/awards';
import { eventsConfig } from './tableConfigs/events';
import { userAwardsConfig } from './tableConfigs/userAwards';
import { userEventsConfig } from './tableConfigs/userEvents';
import { sportConfig } from './tableConfigs/sport';
import { ExportUrls } from 'enums/exportUrls';
import { BASE_URL } from 'helpers/request';
import { ITableColumn } from './components/DashboardMore/types';

export interface IDashboardPage {
    id: DashboardPagesUrlEnum;
    title: string;
    tableConfig: ITableColumn[];
    url: DashboardPagesUrlEnum;
    exportUrl: string;
    isClickable: boolean;
}

export const DashboardPagesConfig: IDashboardPage[] = [
    {
        id: DashboardPagesUrlEnum.awards,
        title: 'Награждения',
        tableConfig: awardsConfig,
        url: DashboardPagesUrlEnum.awards,
        exportUrl: `${BASE_URL}${ExportUrls.exportAwards}`,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.education,
        title: 'Образование',
        tableConfig: eventsConfig,
        url: DashboardPagesUrlEnum.education,
        exportUrl: `${BASE_URL}${ExportUrls.exportEducation}`,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.financialHelp,
        title: 'Материальная помощь',
        tableConfig: userAwardsConfig,
        url: DashboardPagesUrlEnum.financialHelp,
        exportUrl: `${BASE_URL}${ExportUrls.exportFinancialHelp}`,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.legalHelp,
        title: 'Юридическая помощь',
        tableConfig: userEventsConfig,
        url: DashboardPagesUrlEnum.legalHelp,
        exportUrl: `${BASE_URL}${ExportUrls.exportLegalHelp}`,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.users,
        title: 'Участники',
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.users,
        exportUrl: `${BASE_URL}${ExportUrls.exportUsers}`,
        isClickable: true,
    },
    {
        id: DashboardPagesUrlEnum.security,
        title: 'Охрана труда',
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.security,
        exportUrl: `${BASE_URL}${ExportUrls.exportSeciruty}`,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.sport,
        title: 'Спортивная жизнь',
        tableConfig: sportConfig,
        url: DashboardPagesUrlEnum.sport,
        exportUrl: `${BASE_URL}${ExportUrls.exportSport}`,
        isClickable: false,
    },
];
