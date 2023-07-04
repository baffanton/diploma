import React from 'react';

import { Icon } from 'components/ui/Icon';
import { Layout } from 'components/widgets/Layout';
import { Link } from 'components/widgets/Link';
import { Text } from 'components/widgets/Text';

import { INewsModal } from './types';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SizeEnum } from 'enums/sizeTypes';

import './style.scss';

const NewsModal: React.FC<INewsModal> = ({ onClose, option }) => {
    const { title, description, source, picture } = option;

    return (
        <Layout className="news-modal">
            <Layout className="news-modal__info">
                <Text className="news-modal__title" fontSize={SizeEnum.large}>
                    {title}
                </Text>
                <Icon
                    className="news-modal__close"
                    onClick={() => onClose()}
                    fontAwesomeIcon={faXmark}
                    pointer
                    heightType={SizeEnum.short}
                />
                <Layout className="news-modal__main">
                    <Text className="news-modal__description" fontSize={SizeEnum.short}>
                        {description}
                    </Text>
                    <Layout className="news-modal__source">
                        <Text className="news-modal__source-title">Источники: </Text>
                        <Layout className="news-modal__source-container">
                            <Link href={source.vk}>
                                <Icon
                                    className="news-modal__source-item"
                                    fontAwesomeIcon={faVk}
                                    heightType={SizeEnum.medium}
                                />
                            </Link>
                            <Link href={source.tg}>
                                <Icon
                                    className="news-modal__source-item"
                                    fontAwesomeIcon={faTelegram}
                                    heightType={SizeEnum.medium}
                                />
                            </Link>
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
            <Layout className="news-modal__picture-container">
                <Icon className="news-modal__picture" src={picture} />
            </Layout>
        </Layout>
    );
};

export { NewsModal };
