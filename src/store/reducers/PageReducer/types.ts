import { IModal } from './helpers';

export const MODAL_OPEN = 'PAGE/OPEN_MODAL';
export const MODAL_CLOSE = 'PAGE/CLOSE_MODAL';
export const LOADER_SHOW = 'PAGE/SHOW_LOADER';
export const LOADER_HIDE = 'PAGE/HIDE_LOADER';

export interface IOpenModal {
    type: typeof MODAL_OPEN;
    modal: IModal;
    isOpenModal: boolean;
}

export interface ICloseModal {
    type: typeof MODAL_CLOSE;
    modal: IModal | null;
    isOpenModal: boolean;
}

export interface IShowLoader {
    type: typeof LOADER_SHOW;
}

export interface IHideLoader {
    type: typeof LOADER_HIDE;
}

export interface IPageReducerModel {
    readonly modal: IModal | null;
    readonly isOpenModal: boolean;
    loaderPoints: number;
}

export type PageActionTypes = IOpenModal | ICloseModal | IShowLoader | IHideLoader;
