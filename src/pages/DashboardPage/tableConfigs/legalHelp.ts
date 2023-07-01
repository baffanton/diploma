import { ITableColumn } from '../components/DashboardMore/types';

export const legalHelpConfig: ITableColumn[] = [
    {
        Header: 'Пользователь',
        accessor: 'user',
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
