import { ITableColumn } from "helpers/tableConfigTypes";

export const eventsConfig: ITableColumn[] = [
    {
        Header: "Название мероприятия",
        accessor: "name",
    },
    {
        Header: "Описание",
        accessor: "description",
    },
    {
        Header: "Адрес",
        accessor: "address",
    },
    {
        Header: "Дата",
        accessor: "date",
    },
    {
        Header: "Вид награды",
        accessor: "type",
    }
]