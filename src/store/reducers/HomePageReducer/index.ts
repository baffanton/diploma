import { HOME_FETCH_EVENTS, HOME_FETCH_NEWS, HomeActionTypes, IHomePageReducerModel } from './types';

export const initialState: IHomePageReducerModel = {
    news: null,
    events: null,
};

export function homePageReducer(state = initialState, action: HomeActionTypes): IHomePageReducerModel {
    switch (action.type) {
        case HOME_FETCH_NEWS:
            return {
                ...state,
                news: action.news,
            };
        case HOME_FETCH_EVENTS:
            return {
                ...state,
                events: action.events,
            };
        default:
            return state;
    }
}
