import { ITableColumn } from '../components/DashboardMore/types';

export const awardsConfig: ITableColumn[] = [
    {
        Header: 'Мероприятие',
        accessor: 'title',
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
