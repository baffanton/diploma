import { ITableColumn } from '../components/DashboardMore/types';

export const legalHelpConfig: ITableColumn[] = [
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
