import { ModalTypes } from 'enums/modalTypes';
import { Dispatch } from 'react';
import { ICloseModal, IOpenModal } from 'store/reducers/PageReducer/types';

export interface IHomeHelp {
    openModal: (
        modalType: ModalTypes,
        onClose: any,
        option: any,
    ) => Dispatch<IOpenModal>;
    closeModal: () => Dispatch<ICloseModal>;
}
