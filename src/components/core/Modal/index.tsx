import React from 'react';

import { Layout } from 'components/core/Layout';

import { getModal } from './helpers';
import { IModalProps } from './types';

import './style.scss';

const Modal: React.FC<IModalProps> = ({ type, closeModal, option }) => {
    return <Layout className="modal-window">{getModal(type, closeModal, option)}</Layout>;
};

export { Modal };
