import { Dispatch } from 'react';

import { INewsModalOptions } from 'components/ui/Modal/components/NewsModal/types';

import { ModalTypes } from 'enums/modalTypes';
import { ICloseModal, IOpenModal } from 'store/reducers/PageReducer/types';

export interface INews {
    item: INewsModel;
    openModal: (modalTypes: ModalTypes, onClose: () => void, option: INewsModalOptions) => Dispatch<IOpenModal>;
    closeModal: () => Dispatch<ICloseModal>;
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
