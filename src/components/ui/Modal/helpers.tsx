import React from 'react';

import { AddUserModal } from './components/AddUser';
import { ChooseModal } from './components/ChooseModal';
import { MessageModal } from './components/MessageModal';
import { NewsModal } from './components/NewsModal';
import { ModalTypes } from 'enums/modalTypes';

export const getModal = (type: ModalTypes, closeModal: () => void, option: any): React.ReactElement | null => {
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
