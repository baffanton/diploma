import React from 'react';
import { Button } from 'components/core/Button';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Text } from 'components/core/Text';
import { IChooseModal } from './types';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SizeEnum } from 'enums/sizeTypes';
import './style.scss';

const ChooseModal: React.FC<IChooseModal> = ({ onClose, option }) => {
    const { message, onAccept, onAcceptTitle, onCancelTitle, title } = option;

    return (
        <Layout className="choose-modal">
            <Layout className="choose-modal__header">
                <Text className="choose-modal__title" fontSize={SizeEnum.large}>
                    {title}
                </Text>
                <Icon
                    className="choose-modal__close"
                    onClick={() => onClose()}
                    fontAwesomeIcon={faXmark}
                    heightType={SizeEnum.short}
                />
            </Layout>
            <Layout className="choose-modal__body">
                <Text className="choose-modal__message">{message}</Text>
                <Layout className="choose-modal__button-container">
                    <Button className="choose-modal__button-accept" heightType={SizeEnum.medium} onClick={onAccept}>
                        {onAcceptTitle}
                    </Button>
                    <Button className="choose-modal__button-close" heightType={SizeEnum.medium} onClick={onClose}>
                        {onCancelTitle}
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    );
};

export { ChooseModal };
