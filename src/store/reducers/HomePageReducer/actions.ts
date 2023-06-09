import { RequestTypesEnum } from "enums/requestTypes";
import { HOME_FETCH_EVENTS, HOME_FETCH_NEWS, IFetchEvents, IFetchNews } from "./types";
import { RequestApiEnum } from "enums/requestApi";
import { request } from "helpers/request";
import { configNews } from "mockedData/configNews";
import { configEvents } from "mockedData/configEvents";

export const fetchNews = () => (dispatch: (arg0: IFetchNews) => void) => {
    return dispatch({
        type: HOME_FETCH_NEWS,
        news: configNews
    })

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
    return dispatch({
        type: HOME_FETCH_EVENTS,
        events: configEvents
    })

    request(RequestTypesEnum.get, RequestApiEnum.getNews, null)
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