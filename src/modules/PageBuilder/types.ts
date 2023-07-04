import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { IModalProps } from 'components/ui/Modal/types';

import { IFetchUser } from 'store/reducers/UserReducer/types';

export interface IPageBuilder {
    isOpenModal: boolean;
    modal: IModalProps | null;
    loaderPoints: number;
    fetchUser: (navigate: NavigateFunction) => Dispatch<IFetchUser>;
}
