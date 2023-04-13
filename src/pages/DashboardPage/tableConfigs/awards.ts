import { ITableColumn } from "helpers/tableConfigTypes";

export const awardsConfig: ITableColumn[] = [
    {
        Header: "Идентификатор",
        accessor: "id",
    },
    {
        Header: "Название",
        accessor: "name",
    },
    {
        Header: "Описание",
        accessor: "description",
    },
    {
        Header: "Тип награды",
        accessor: "type",
    },
    {
        Header: "Кол-во очков",
        accessor: "points",
    },
]