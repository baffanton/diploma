import { ITableColumn } from "helpers/tableConfigTypes";

export const userAwardsConfig: ITableColumn[] = [
    {
        Header: "Пользователь",
        accessor: "user",
    },
    {
        Header: "Награда",
        accessor: "awards",
    },
    {
        Header: "Дата",
        accessor: "date",
    }
]