import { ModalTypes } from 'enums/modalTypes';
import { Dispatch } from 'react';
import {
    ICloseModal,
    IOpenModal,
    IShowLoader,
    IHideLoader,
} from 'store/reducers/PageReducer/types';
import { IFetchUser } from 'store/reducers/UserReducer/types';
import { IMessageModalOptions } from 'ui/Modal/components/MessageModal/types';

export interface IAuthPage {
    closeModal: () => Dispatch<ICloseModal>;
    openModal: (
        modalTypes: ModalTypes,
        onClose: () => void,
        option: IMessageModalOptions,
    ) => Dispatch<IOpenModal>;
    showLoader: () => Dispatch<IShowLoader>;
    hideLoader: () => Dispatch<IHideLoader>;
    fetchUser: () => Dispatch<IFetchUser>;
}

export interface IAuthData {
    username: string;
    password: string;
}
