import { ITableColumn } from '../components/DashboardMore/types';

export const legalHelpConfig: ITableColumn[] = [
    {
        Header: 'Пользователь',
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
