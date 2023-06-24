import { ModalTypes } from 'enums/modalTypes';
import { NewsModal } from './components/NewsModal';
import { MessageModal } from './components/MessageModal';
import { ChooseModal } from './components/ChooseModal';
import { AddUserModal } from './components/AddUser';

export const getModal = (
    type: ModalTypes,
    closeModal: any,
    option: any,
): React.ReactElement | null => {
    switch (type) {
        case ModalTypes.newsModal:
            return <NewsModal onClose={closeModal} option={option} />;
        case ModalTypes.messageModal:
            return <MessageModal onClose={closeModal} option={option} />;
        case ModalTypes.chooseModal:
            return <ChooseModal onClose={closeModal} option={option} />;
        case ModalTypes.addUser:
            return <AddUserModal onClose={closeModal} option={option} />;
        default:
            return null;
    }
};
