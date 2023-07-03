import { IEventModel } from 'pages/HomePage/components/HomeEvents/components/Event/types';
import { INewsModel } from 'pages/HomePage/components/HomeNews/components/News/types';

export const HOME_FETCH_NEWS = 'HOME/FETCH_NEWS';
export const HOME_FETCH_EVENTS = 'HOME/FETCH_EVENTS';

export interface IFetchNews {
    type: typeof HOME_FETCH_NEWS;
    news: INewsModel[];
}

export interface IFetchEvents {
    type: typeof HOME_FETCH_EVENTS;
    events: IEventModel[];
}

export interface IHomePageReducerModel {
    readonly news: INewsModel[] | null;
    readonly events: IEventModel[] | null;
}

export type HomeActionTypes = IFetchEvents | IFetchNews;
