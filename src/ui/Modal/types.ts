import { ModalTypes } from 'enums/modalTypes';
import { IAddUserModalOptions } from './components/AddUser/types';
import { IChooseModalOptions } from './components/ChooseModal/types';
import { IMessageModalOptions } from './components/MessageModal/types';
import { INewsModalOptions } from './components/NewsModal/types';

export interface IModalProps {
    type: ModalTypes;
    closeModal: any;
    option: IAddUserModalOptions | IChooseModalOptions | IMessageModalOptions | INewsModalOptions;
}
