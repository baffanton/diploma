import { ModalTypes } from 'enums/modalTypes';
import {
    ICloseModal,
    IHideLoader,
    IOpenModal,
    IShowLoader,
    LOADER_HIDE,
    LOADER_SHOW,
    MODAL_CLOSE,
    MODAL_OPEN,
} from './types';

export const openModal =
    (modalType: ModalTypes, onClose: any, option: any) => (dispatch: (arg0: IOpenModal) => void) => {
        const modal = {
            type: modalType,
            onClose,
            option,
        };
        dispatch({
            type: MODAL_OPEN,
            modal,
            isOpenModal: true,
        });
    };

export const closeModal = () => (dispatch: (arg0: ICloseModal) => void) => {
    dispatch({
        type: MODAL_CLOSE,
        modal: null,
        isOpenModal: false,
    });
};

export const showLoader = () => (dispatch: (arg0: IShowLoader) => void) => {
    dispatch({
        type: LOADER_SHOW,
    });
};

export const hideLoader = () => (dispatch: (arg0: IHideLoader) => void) => {
    dispatch({
        type: LOADER_HIDE,
    });
};
