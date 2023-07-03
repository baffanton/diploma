import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';

export interface IControlPanel {
    panel: IControlPanelItem;
}

export interface IControlPanelItem {
    id: string;
    title: string;
    icon: IconDefinition;
    url: DashboardPagesUrlEnum;
}
