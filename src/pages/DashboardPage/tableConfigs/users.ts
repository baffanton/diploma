import { ITableColumn } from '../components/DashboardMore/types';

export const usersConfig: ITableColumn[] = [
    {
        Header: 'Фамилия',
        accessor: 'lastname',
    },
    {
        Header: 'Имя',
        accessor: 'firstname',
    },
    {
        Header: 'Отчество',
        accessor: 'surname',
    },
    {
        Header: 'Место работы',
        accessor: 'placement',
    },
    {
        Header: 'Должность',
        accessor: 'position',
    },
    {
        Header: 'Номер телефона',
        accessor: 'phone',
    },
];
