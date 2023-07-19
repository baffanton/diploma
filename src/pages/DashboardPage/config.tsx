import { awardsConfig } from './tableConfigs/awards';
import { educationConfig } from './tableConfigs/education';
import { financialHelpConfig } from './tableConfigs/financialHelp';
import { legalHelpConfig } from './tableConfigs/legalHelp';
import { securityConfig } from './tableConfigs/security';
import { sportConfig } from './tableConfigs/sport';
import { usersConfig } from './tableConfigs/users';
import { IDashboardPage } from './types';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';

export const DashboardPagesConfig: IDashboardPage[] = [
    {
        id: DashboardPagesUrlEnum.awards,
        title: 'Награждения',
        tableConfig: awardsConfig,
        url: DashboardPagesUrlEnum.awards,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.education,
        title: 'Образование',
        tableConfig: educationConfig,
        url: DashboardPagesUrlEnum.education,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.financialHelp,
        title: 'Материальная помощь',
        tableConfig: financialHelpConfig,
        url: DashboardPagesUrlEnum.financialHelp,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.legalHelp,
        title: 'Юридическая помощь',
        tableConfig: legalHelpConfig,
        url: DashboardPagesUrlEnum.legalHelp,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.users,
        title: 'Участники',
        tableConfig: usersConfig,
        url: DashboardPagesUrlEnum.users,
        isClickable: true,
    },
    {
        id: DashboardPagesUrlEnum.security,
        title: 'Охрана труда',
        tableConfig: securityConfig,
        url: DashboardPagesUrlEnum.security,
        isClickable: false,
    },
    {
        id: DashboardPagesUrlEnum.sport,
        title: 'Спортивная жизнь',
        tableConfig: sportConfig,
        url: DashboardPagesUrlEnum.sport,
        isClickable: false,
    },
];
