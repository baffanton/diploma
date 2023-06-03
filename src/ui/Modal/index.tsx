import { ModalTypes } from 'enums/modalTypes';
import './style.scss';
import { getModal } from './helpers';
import { Layout } from 'widgets/Layout';

interface IModalProps {
    type: ModalTypes;
    closeModal: any;
    option: any;
}

const Modal: React.FC<IModalProps> = ({type, closeModal, option}) => {
    return (
        <Layout className="modal-window">
            {getModal(type, closeModal, option)}
        </Layout>
    );
}

export { Modal };
