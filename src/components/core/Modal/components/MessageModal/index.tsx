import React from 'react';

import { Button } from 'components/core/Button';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Text } from 'components/core/Text';

import { IMessageModal } from './types';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SizeEnum } from 'enums/sizeTypes';

import './style.scss';

const MessageModal: React.FC<IMessageModal> = ({ onClose, option }) => {
    const { message, title } = option;

    return (
        <Layout className="message-modal">
            <Layout className="message-modal__header">
                <Text className="message-modal__title" fontSize={SizeEnum.large}>
                    {title ?? 'Сообщение'}
                </Text>
                <Icon className="message-modal__close" onClick={() => onClose()} fontAwesomeIcon={faXmark} />
            </Layout>
            <Layout className="message-modal__body">
                <Text className="message-modal__message">{message}</Text>
                <Layout className="message-modal__button-container">
                    <Button className="message-modal__button-close" heightType={SizeEnum.short} onClick={onClose}>
                        Закрыть
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    );
};

export { MessageModal };
