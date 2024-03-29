import { IChangeUserModalOptions } from './components/ChangeUser/types';
import { IChooseModalOptions } from './components/ChooseModal/types';
import { IMessageModalOptions } from './components/MessageModal/types';
import { INewsModalOptions } from './components/NewsModal/types';
import { ModalTypes } from 'enums/modalTypes';

export interface IModalProps {
    type: ModalTypes;
    closeModal: () => void;
    option: ModalOptionsTypes;
}

export type ModalOptionsTypes =
    | IChooseModalOptions
    | IMessageModalOptions
    | INewsModalOptions
    | IChangeUserModalOptions;
