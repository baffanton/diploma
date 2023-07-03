import { Dispatch } from 'react';
import { IFetchEvents, IFetchNews } from 'store/reducers/HomePageReducer/types';
import { INewsModel } from './components/HomeNews/components/News/types';
import { IEventModel } from './components/HomeEvents/components/Event/types';

export interface IHomePage {
    fetchNews: () => Dispatch<IFetchNews>;
    fetchEvents: () => Dispatch<IFetchEvents>;
    events: IEventModel[];
    news: INewsModel[];
    auth: boolean;
}
