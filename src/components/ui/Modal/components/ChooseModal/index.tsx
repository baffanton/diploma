import React from 'react';
import './style.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SizeEnum } from 'enums/sizeTypes';
import { IChooseModal } from './types';
import { Button } from 'components/ui/Button';
import { Icon } from 'components/ui/Icon';
import { Layout } from 'components/widgets/Layout';
import { Text } from 'components/widgets/Text';

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
                    <Button className="choose-modal__button-accept" heightType={SizeEnum.short} onClick={onAccept}>
                        {onAcceptTitle}
                    </Button>
                    <Button className="choose-modal__button-close" heightType={SizeEnum.short} onClick={onClose}>
                        {onCancelTitle}
                    </Button>
                </Layout>
            </Layout>
        </Layout>
    );
};

export { ChooseModal };
