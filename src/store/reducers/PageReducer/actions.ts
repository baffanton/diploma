import { IChangeUserModalOptions } from 'components/core/Modal/components/ChangeUser/types';
import { IChooseModalOptions } from 'components/core/Modal/components/ChooseModal/types';
import { IMessageModalOptions } from 'components/core/Modal/components/MessageModal/types';
import { INewsModalOptions } from 'components/core/Modal/components/NewsModal/types';
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
import { ModalTypes } from 'enums/modalTypes';

export const openModal =
    (
        modalType: ModalTypes,
        closeModal: () => void,
        option: IChooseModalOptions | IMessageModalOptions | INewsModalOptions | IChangeUserModalOptions,
    ) =>
    (dispatch: (arg0: IOpenModal) => void) => {
        const modal = {
            type: modalType,
            closeModal,
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
