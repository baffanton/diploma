import { ITableColumn } from '../components/DashboardMore/types';

export const awardsConfig: ITableColumn[] = [
    {
        Header: 'Мероприятие',
        accessor: 'title',
    },
    {
        Header: 'Дата',
        accessor: 'month',
    },
    {
        Header: 'Место',
        accessor: 'place',
    },
];
