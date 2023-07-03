import './style.scss';
import { getModal } from './helpers';
import { IModalProps } from './types';
import { Layout } from 'components/widgets/Layout';

const Modal: React.FC<IModalProps> = ({ type, closeModal, option }) => {
    return <Layout className="modal-window">{getModal(type, closeModal, option)}</Layout>;
};

export { Modal };
