import { ModalTypes } from 'enums/modalTypes';
import { Dispatch } from 'react';
import { IOpenModal, ICloseModal } from 'store/reducers/PageReducer/types';
import { INewsModel } from 'types/INewsModel';
import { INewsModalOptions } from 'ui/Modal/components/NewsModal/types';

export interface INews {
    item: INewsModel;
    openModal: (
        modalTypes: ModalTypes,
        onClose: () => void,
        option: INewsModalOptions,
    ) => Dispatch<IOpenModal>;
    closeModal: () => Dispatch<ICloseModal>;
}
