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
import { IAddUserModalOptions } from 'components/ui/Modal/components/AddUser/types';
import { IChooseModalOptions } from 'components/ui/Modal/components/ChooseModal/types';
import { IEditUserModalOptions } from 'components/ui/Modal/components/EditUser/types';
import { IMessageModalOptions } from 'components/ui/Modal/components/MessageModal/types';
import { INewsModalOptions } from 'components/ui/Modal/components/NewsModal/types';

export const openModal =
    (
        modalType: ModalTypes,
        closeModal: () => void,
        option:
            | IAddUserModalOptions
            | IChooseModalOptions
            | IMessageModalOptions
            | INewsModalOptions
            | IEditUserModalOptions,
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
