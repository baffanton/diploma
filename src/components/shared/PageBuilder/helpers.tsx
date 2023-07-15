import React from 'react';

import { Modal } from 'components/core/Modal';
import { IModalProps } from 'components/core/Modal/types';

export const getModal = (isOpenModal: boolean, modal: IModalProps | null) => {
    if (!isOpenModal || !modal) {
        return null;
    }

    const { type, closeModal, option } = modal;

    return <Modal type={type} closeModal={closeModal} option={option} />;
};
