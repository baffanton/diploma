import { ITableColumn } from '../components/DashboardMore/types';

export const educationConfig: ITableColumn[] = [
    {
        Header: 'Сотрудник',
        accessor: 'name',
    },
    {
        Header: 'Место',
        accessor: 'place',
    },
    {
        Header: 'Дата начала',
        accessor: 'startDate',
    },
    {
        Header: 'Дата окончания',
        accessor: 'endDate',
    },
];
