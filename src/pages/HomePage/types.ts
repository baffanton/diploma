import { Dispatch } from 'react';
import { IFetchEvents, IFetchNews } from 'store/reducers/HomePageReducer/types';
import { IEventModel } from 'types/IEventModel';

export interface IHomePage {
    fetchNews: () => Dispatch<IFetchNews>;
    fetchEvents: () => Dispatch<IFetchEvents>;
    events: IEventModel[];
    news: INewsModel[];
    auth: boolean;
}

export interface INewsModel {
    id: string;
    title: string;
    description: string;
    source: {
        vk: string;
        tg: string;
    };
    picture: string;
}
