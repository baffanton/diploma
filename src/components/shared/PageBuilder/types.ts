import { IModalProps } from 'components/core/Modal/types';
import { Dispatch } from '@reduxjs/toolkit';
import { IUserData } from 'store/reducers/UserReducer/helpers';
import { IFetchUser } from 'store/reducers/UserReducer/types';

export interface IPageBuilder {
    isOpenModal: boolean;
    modal: IModalProps | null;
    loaderPoints: number;
    fetchUser: (user: IUserData) => Dispatch<IFetchUser>;
}
