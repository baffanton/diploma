import { Dispatch } from 'react';
import { IEventModel } from './components/HomeEvents/components/Event/types';
import { INewsModel } from './components/HomeNews/components/News/types';
import { IFetchEvents, IFetchNews } from 'store/reducers/HomePageReducer/types';

export interface IHomePage {
    fetchNews: () => Dispatch<IFetchNews>;
    fetchEvents: () => Dispatch<IFetchEvents>;
    events: IEventModel[];
    news: INewsModel[];
}
