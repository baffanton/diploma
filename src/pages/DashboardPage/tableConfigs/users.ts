import { ITableColumn } from "helpers/tableConfigTypes";

export const usersConfig: ITableColumn[] = [
    {
        Header: "Фамилия",
        accessor: "lastname",
    },
    {
        Header: "Имя",
        accessor: "firstname",
    },
    {
        Header: "Отчество",
        accessor: "surname",
    },
    {
        Header: "Место работы",
        accessor: "placement",
    },
    {
        Header: "Должность",
        accessor: "position",
    },
    {
        Header: "Номер телефона",
        accessor: "phone",
    }
]