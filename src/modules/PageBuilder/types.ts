import { Dispatch } from 'react';
import { IModal } from 'store/reducers/PageReducer/helpers';
import { IFetchUser } from 'store/reducers/UserReducer/types';

export interface IPageBuilder {
    isOpenModal: boolean;
    modal: IModal | null;
    loaderPoints: number;
    fetchUser: () => Dispatch<IFetchUser>;
}
