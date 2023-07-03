import { ITableColumn } from '../components/DashboardMore/types';

export const securityConfig: ITableColumn[] = [
    {
        Header: 'Сотрудник',
        accessor: 'name',
    },
    {
        Header: 'Место проверки',
        accessor: 'place',
    },
    {
        Header: 'Дата',
        accessor: 'date',
    },
    {
        Header: 'Результат',
        accessor: 'result',
    },
];
