import { Dispatch } from 'react';
import { IFetchEvents, IFetchNews } from 'store/reducers/HomePageReducer/types';
import { IEventModel } from 'types/IEventModel';
import { INewsModel } from 'types/INewsModel';

export interface IHomePage {
    fetchNews: () => Dispatch<IFetchNews>;
    fetchEvents: () => Dispatch<IFetchEvents>;
    events: IEventModel[];
    news: INewsModel[];
}
