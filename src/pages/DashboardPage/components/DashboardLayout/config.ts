import { IControlRow } from './types';
import {
    faAward,
    faBasketball,
    faPeopleGroup,
    faRubleSign,
    faScaleBalanced,
    faUserGraduate,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';

export const ControlRows: IControlRow[] = [
    {
        id: 'firstRow',
        panels: [
            {
                id: 'security',
                title: 'Охрана труда',
                icon: faUserShield,
                url: DashboardPagesUrlEnum.security,
            },
            {
                id: 'sport',
                title: 'Спортивная жизнь',
                icon: faBasketball,
                url: DashboardPagesUrlEnum.sport,
            },
        ],
    },
    {
        id: 'secondRow',
        panels: [
            {
                id: 'members',
                title: 'Участники',
                icon: faPeopleGroup,
                url: DashboardPagesUrlEnum.users,
            },
            {
                id: 'financialHelp',
                title: 'Материальная помощь',
                icon: faRubleSign,
                url: DashboardPagesUrlEnum.financialHelp,
            },
            {
                id: 'legalHelp',
                title: 'Юридическая помощь',
                icon: faScaleBalanced,
                url: DashboardPagesUrlEnum.legalHelp,
            },
        ],
    },
    {
        id: 'thirdRow',
        panels: [
            {
                id: 'awards',
                title: 'Награждения',
                icon: faAward,
                url: DashboardPagesUrlEnum.awards,
            },
            {
                id: 'education',
                title: 'Обучение',
                icon: faUserGraduate,
                url: DashboardPagesUrlEnum.education,
            },
        ],
    },
];
