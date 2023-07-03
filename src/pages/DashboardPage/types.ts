import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { ITableColumn } from './components/DashboardMore/types';

export interface IDashboardPage {
    id: DashboardPagesUrlEnum;
    title: string;
    tableConfig: ITableColumn[];
    url: DashboardPagesUrlEnum;
    exportUrl: string;
    isClickable: boolean;
}
