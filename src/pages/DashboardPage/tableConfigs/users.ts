import { ITableColumn } from "helpers/tableConfigTypes";

export const usersConfig: ITableColumn[] = [
    {
        Header: "Логин",
        accessor: "username",
    },
    {
        Header: "Фамилия",
        accessor: "lastname",
    },
    {
        Header: "Имя",
        accessor: "name",
    },
    {
        Header: "Отчество",
        accessor: "surname",
    },
    {
        Header: "Роль",
        accessor: "role",
    },
    
]