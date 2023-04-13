import { ITableColumn } from "helpers/tableConfigTypes";

export const usersConfig: ITableColumn[] = [
    {
        Header: "Идентификатор",
        accessor: "id",
    },
    {
        Header: "Логин",
        accessor: "username",
    },
    {
        Header: "Роль",
        accessor: "role",
    },
    {
        Header: "Пол",
        accessor: "gender",
    },
    {
        Header: "Возраст",
        accessor: "age",
    },
]