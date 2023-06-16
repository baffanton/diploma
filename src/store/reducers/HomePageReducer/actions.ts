import { RequestTypesEnum } from "enums/requestTypes";
import { HOME_FETCH_EVENTS, HOME_FETCH_NEWS, IFetchEvents, IFetchNews } from "./types";
import { RequestApiEnum } from "enums/requestApi";
import { request } from "helpers/request";

export const fetchNews = () => (dispatch: (arg0: IFetchNews) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getNews, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                dispatch({
                    type: HOME_FETCH_NEWS,
                    news: null,
                })
            }

            dispatch({
                type: HOME_FETCH_NEWS,
                news: data,
            })
        })
        .catch(errors => {
            dispatch({
                type: HOME_FETCH_NEWS,
                news: null,
            })
            console.log(errors);
        })
}

export const fetchEvents = () => (dispatch: (arg0: IFetchEvents) => void) => {
    request(RequestTypesEnum.get, RequestApiEnum.getEvents, null)
        .then(res => {
            const { data } = res;

            if (!data) {
                dispatch({
                    type: HOME_FETCH_EVENTS,
                    events: null,
                })
            }

            dispatch({
                type: HOME_FETCH_EVENTS,
                events: data,
            })
        })
        .catch(errors => {
            dispatch({
                type: HOME_FETCH_EVENTS,
                events: null,
            })
            console.log(errors);
        })
}