import { ITableColumn } from '../components/DashboardMore/types';

export const financialHelpConfig: ITableColumn[] = [
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
