import { ITableColumn } from './components/DashboardMore/types';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';

export interface IDashboardPage {
    id: DashboardPagesUrlEnum;
    title: string;
    tableConfig: ITableColumn[];
    url: DashboardPagesUrlEnum;
    isClickable: boolean;
}
