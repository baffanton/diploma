import { ITableColumn } from '../components/DashboardMore/types';

export const educationConfig: ITableColumn[] = [
    {
        Header: 'Сотрудник',
        accessor: 'name',
    },
    {
        Header: 'Место учебы',
        accessor: 'place',
    },
    {
        Header: 'Год начала',
        accessor: 'startYear',
    },
    {
        Header: 'Год окончания',
        accessor: 'endYear',
    },
];
