import { IModalReducerModel, MODAL_CLOSE, MODAL_OPEN, ModalActionTypes } from "./types";

export const initialState: IModalReducerModel = {
    modal: null,
    isOpen: false
}

export function modalRecuder(state = initialState, action: ModalActionTypes): IModalReducerModel {
    switch (action.type) {
        case MODAL_OPEN:
        case MODAL_CLOSE:
            return {
                ...state,
                modal: action.modal,
                isOpen: action.isOpen
            };
        default:
            return state;
    }
}