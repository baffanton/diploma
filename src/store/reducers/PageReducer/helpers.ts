import { ModalTypes } from 'enums/modalTypes';

export interface IModal {
    type: ModalTypes;
    onClose: any;
    option: any;
}
