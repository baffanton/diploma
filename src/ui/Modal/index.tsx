import './style.scss';
import { getModal } from './helpers';
import { Layout } from 'widgets/Layout';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = ({ type, closeModal, option }) => {
    return (
        <Layout className="modal-window">
            {getModal(type, closeModal, option)}
        </Layout>
    );
};

export { Modal };
