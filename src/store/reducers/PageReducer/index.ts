import { IPageReducerModel, LOADER_HIDE, LOADER_SHOW, MODAL_CLOSE, MODAL_OPEN, PageActionTypes } from "./types";

export const initialState: IPageReducerModel = {
    modal: null,
    isOpenModal: false,
    loaderPoints: 0,
}

export function pageReducer(state = initialState, action: PageActionTypes): IPageReducerModel {
    switch (action.type) {
        case MODAL_OPEN:
        case MODAL_CLOSE:
            return {
                ...state,
                modal: action.modal,
                isOpenModal: action.isOpenModal,
            };
        case LOADER_SHOW:
            return {
                ...state,
                loaderPoints: state.loaderPoints + 1,
            }
        case LOADER_HIDE:
            return {
                ...state,
                loaderPoints: state.loaderPoints - 1,
            }
        default:
            return state;
    }
}