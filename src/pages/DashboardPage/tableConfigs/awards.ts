import { ITableColumn } from "helpers/tableConfigTypes";

export const awardsConfig: ITableColumn[] = [
    {
        Header: "Мероприятие",
        accessor: "title",
    },
    {
        Header: "Дата",
        accessor: "month",
    },
    {
        Header: "Место",
        accessor: "place",
    }
]