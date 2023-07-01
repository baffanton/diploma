import { RequestTypesEnum } from 'enums/requestTypes';
import { HOME_FETCH_EVENTS, HOME_FETCH_NEWS, IFetchEvents, IFetchNews } from './types';
import { RequestApiEnum } from 'enums/requestApi';
import { request } from 'helpers/request';
import { hideLoader, showLoader } from '../PageReducer/actions';

export const fetchNews = () => (dispatch: (arg0: IFetchNews) => void) => {
    // @ts-ignore
    dispatch(showLoader());

    request(RequestTypesEnum.get, RequestApiEnum.getNews, null)
        .then((res) => {
            const { data } = res;

            dispatch({
                type: HOME_FETCH_NEWS,
                news: data,
            });
        })
        .catch((errors) => {
            console.log(errors);
        })
        .finally(() => {
            // @ts-ignore
            dispatch(hideLoader());
        });
};

export const fetchEvents = () => (dispatch: (arg0: IFetchEvents) => void) => {
    // @ts-ignore
    dispatch(showLoader());

    request(RequestTypesEnum.get, RequestApiEnum.getEvents, null)
        .then((res) => {
            const { data } = res;

            dispatch({
                type: HOME_FETCH_EVENTS,
                events: data,
            });
        })
        .catch((errors) => {
            console.log(errors);
        })
        .finally(() => {
            // @ts-ignore
            dispatch(hideLoader());
        });
};
