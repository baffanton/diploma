import { ITableColumn, TableDataTypes } from 'pages/DashboardPage/components/DashboardMore/types';

export interface ITable {
    config: ITableColumn[];
    tableData: TableDataTypes | [];
    isClickable?: boolean;
    selectedRowIndex?: string | null;
    setSelectedRowIndex?: (id: string | null) => void;
}
