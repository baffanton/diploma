import { ITableColumn } from 'pages/DashboardPage/components/DashboardMore/types';

export interface ITable {
    config: ITableColumn[];
    tableData: any[];
    isClickable?: boolean;
    selectedRowIndex?: string | null;
    setSelectedRowIndex?: any;
}
