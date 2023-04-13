import { ModalTypes } from "enums/modalTypes";
import { ICloseModal, IOpenModal, MODAL_CLOSE, MODAL_OPEN } from "./types";

export const openModal = (modalType: ModalTypes, onClose: any, option: any) => (dispatch: (arg0: IOpenModal) => void) => {
    const modal = {
        type: modalType,
        onClose,
        option
    }
    dispatch({
        type: MODAL_OPEN,
        modal,
        isOpen: true
    })
}

export const closeModal = () => (dispatch: (arg0: ICloseModal) => void) => {
    dispatch({
        type: MODAL_CLOSE,
        modal: null,
        isOpen: false
    })
}