import { ITableColumn } from "helpers/tableConfigTypes";

export const userEventsConfig: ITableColumn[] = [
    {
        Header: "Пользователь",
        accessor: "user",
    },
    {
        Header: "Мероприятие",
        accessor: "events",
    },
    {
        Header: "Вид мероприятия",
        accessor: "type",
    }
]