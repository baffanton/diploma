import { ModalTypes } from "enums/modalTypes";
import { IModal } from "./helpers";

export const MODAL_OPEN = "MODAL/OPEN";
export const MODAL_CLOSE = "MODAL/CLOSE";

export interface IOpenModal {
    type: typeof MODAL_OPEN;
    modal: IModal;
    isOpen: boolean;
}

export interface ICloseModal {
    type: typeof MODAL_CLOSE;
    modal: IModal | null;
    isOpen: boolean;
}

export interface IModalReducerModel {
    readonly modal: IModal | null;
    isOpen: boolean;
}

export type ModalActionTypes = 
    | IOpenModal
    | ICloseModal;