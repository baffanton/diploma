import { Modal } from 'components/ui/Modal';
import { IModalProps } from 'components/ui/Modal/types';

export const getModal = (isOpenModal: boolean, modal: IModalProps | null) => {
    if (!isOpenModal || !modal) {
        return null;
    }

    const { type, closeModal, option } = modal;

    return <Modal type={type} closeModal={closeModal} option={option} />;
};
