import React from 'react';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { Text } from 'widgets/Text';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'ui/Button';
import { SizeEnum } from 'enums/sizeTypes';
import { Icon } from 'ui/Icon';
import { IMessageModal } from './types';

const MessageModal: React.FC<IMessageModal> = ({ onClose, option }) => {
    const { message, title } = option;
    return (
        <Layout className="message-modal">
            <Layout className="message-modal__header">
                <Text className="message-modal__title" fontSize={SizeEnum.large}>
                    {title || 'Сообщение'}
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
