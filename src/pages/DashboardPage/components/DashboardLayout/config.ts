import { faAward, faBasketball, faPeopleGroup, faRubleSign, faScaleBalanced, faUserGraduate, faUserShield, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { DashboardPagesUrlEnum } from "enums/dashboardPages";

export interface IControlPanel {
    id: string;
    title: string;
    icon: IconDefinition;
    url: DashboardPagesUrlEnum;
}

export interface IControlRow {
    id: string;
    panels: IControlPanel[];
}

export const ControlRows: IControlRow[] = [
    {
        id: "firstRow",
        panels: [
            {
                id: "osha",
                title: "Охрана труда",
                icon: faUserShield,
                url: DashboardPagesUrlEnum.osha
            },
            {
                id: "sport",
                title: "Спортивная жизнь",
                icon: faBasketball,
                url: DashboardPagesUrlEnum.sport
            }
        ]
    },
    {
        id: "secondRow",
        panels: [
            {
                id: "members",
                title: "Участники",
                icon: faPeopleGroup,
                url: DashboardPagesUrlEnum.users,
            },
            {
                id: "financialHelp",
                title: "Награды пользователей",
                icon: faRubleSign,
                url: DashboardPagesUrlEnum.financialHelp
            },
            {
                id: "legalHelp",
                title: "Мероприятия пользователей",
                icon: faScaleBalanced,
                url: DashboardPagesUrlEnum.legalHelp
            }
        ]
    },
    {
        id: "thirdRow",
        panels: [
            {
                id: "awards",
                title: "Награждения",
                icon: faAward,
                url: DashboardPagesUrlEnum.awards
            },
            {
                id: "education",
                title: "Мероприятия",
                icon: faUserGraduate,
                url: DashboardPagesUrlEnum.education
            }
        ]
    }
]