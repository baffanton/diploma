import { ITableColumn } from '../components/DashboardMore/types';

export const sportConfig: ITableColumn[] = [
    {
        Header: 'Событие',
        accessor: 'title',
    },
    {
        Header: 'Вид спорта',
        accessor: 'sportType',
    },
    {
        Header: 'Дата',
        accessor: 'date',
    },
    {
        Header: 'Место',
        accessor: 'place',
    },
];
