import React from 'react';
import { ChangeUserModal } from './components/ChangeUser';
import { ChooseModal } from './components/ChooseModal';
import { MessageModal } from './components/MessageModal';
import { NewsModal } from './components/NewsModal';
import { ModalTypes } from 'enums/modalTypes';

export const getModal = (type: ModalTypes, closeModal: () => void, option): React.ReactElement | null => {
    switch (type) {
        case ModalTypes.newsModal:
            return <NewsModal onClose={closeModal} option={option} />;
        case ModalTypes.messageModal:
            return <MessageModal onClose={closeModal} option={option} />;
        case ModalTypes.chooseModal:
            return <ChooseModal onClose={closeModal} option={option} />;
        case ModalTypes.changeModal:
            return <ChangeUserModal onClose={closeModal} option={option} />;
        default:
            return null;
    }
};
