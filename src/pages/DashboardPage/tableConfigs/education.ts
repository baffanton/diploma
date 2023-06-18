import { ITableColumn } from "helpers/tableConfigTypes";

export const educationConfig: ITableColumn[] = [
    {
        Header: "Событие",
        accessor: "title",
    },
    {
        Header: "Вид спорта",
        accessor: "sportType",
    },
    {
        Header: "Дата",
        accessor: "month",
    },
    {
        Header: "Место",
        accessor: "placement",
    }
]