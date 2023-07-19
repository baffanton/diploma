import { ITableColumn } from '../components/DashboardMore/types';

export const financialHelpConfig: ITableColumn[] = [
    {
        Header: 'Сотрудник',
        accessor: 'name',
    },
    {
        Header: 'Дата обращения',
        accessor: 'date',
    },
    {
        Header: 'Результат',
        accessor: 'result',
    },
];
