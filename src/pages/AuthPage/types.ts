import { IMessageModalOptions } from 'components/ui/Modal/components/MessageModal/types';
import { ModalTypes } from 'enums/modalTypes';
import { Dispatch } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { ICloseModal, IOpenModal, IShowLoader, IHideLoader } from 'store/reducers/PageReducer/types';
import { IFetchUser } from 'store/reducers/UserReducer/types';

export interface IAuthPage {
    closeModal: () => Dispatch<ICloseModal>;
    openModal: (modalTypes: ModalTypes, onClose: () => void, option: IMessageModalOptions) => Dispatch<IOpenModal>;
    showLoader: () => Dispatch<IShowLoader>;
    hideLoader: () => Dispatch<IHideLoader>;
    fetchUser: (navigate: NavigateFunction) => Dispatch<IFetchUser>;
}

export interface IAuthData {
    username: string;
    password: string;
}
