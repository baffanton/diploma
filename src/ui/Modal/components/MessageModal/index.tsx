import React from 'react';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { Text } from 'ui/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontSizesEnum } from 'enums/fontSizeTypes';
import { Button } from 'ui/ButtonU';
import { HeightTypes } from 'enums/heightTypes';

interface IMessageModal {
    onClose: () => void;
    option: { message: string };
}

const MessageModal: React.FC<IMessageModal> = ({ onClose, option }) => {
    const { message } = option;
    return (
        <Layout className='message-modal'>
            <Layout className='message-modal__header'>
                <Text className='message-modal__title' fontSize={FontSizesEnum.large}>Сообщение</Text>
                <FontAwesomeIcon className='message-modal__close' onClick={() => onClose()} icon={faXmark} />
            </Layout>
            <Layout className='message-modal__body'>
                <Text className='message-modal__message'>{message}</Text>
                <Layout className='message-modal__button-container'>
                    <Button
                        className='message-modal__button-close'
                        heightType={HeightTypes.short}
                        onClick={onClose}
                    >
                        Закрыть
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    )
}

export { MessageModal };
