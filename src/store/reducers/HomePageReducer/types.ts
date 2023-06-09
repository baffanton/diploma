export const HOME_FETCH_NEWS = "HOME/FETCH_NEWS";
export const HOME_FETCH_EVENTS = "HOME/FETCH_EVENTS";

export interface IFetchNews {
    type: typeof HOME_FETCH_NEWS;
    news: any;
}

export interface IFetchEvents {
    type: typeof HOME_FETCH_EVENTS;
    events: any;
}

export interface IHomePageReducerModel {
    readonly news: any;
    readonly events: any;
}

export type HomeActionTypes = 
    | IFetchEvents
    | IFetchNews;