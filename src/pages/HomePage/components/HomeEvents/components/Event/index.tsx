import React, { useState } from 'react';

import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Link } from 'components/core/Link';
import { Text } from 'components/core/Text';

import { IEventElememt } from './types';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { SizeEnum } from 'enums/sizeTypes';

import './style.scss';

const Event: React.FC<IEventElememt> = ({ event }) => {
    const [moreClicked, setMoreClicked] = useState<boolean>(false);

    const onClickHandler = () => {
        return setMoreClicked(!moreClicked);
    };

    const {
        title,
        date,
        place,
        description: { main, contact },
        source: { vk, telegram },
    } = event;

    if (moreClicked) {
        return (
            <Layout className="event-active">
                <Layout className="event-active__header">
                    <Text className="event-active__title" fontSize={SizeEnum.large}>
                        {title}
                    </Text>
                </Layout>
                <Layout className="event-active__body">
                    <Layout className="event-active__info">
                        <Text className="event-active__description" fontSize={SizeEnum.short}>
                            {main}
                        </Text>
                        {contact && (
                            <Layout className="event-active__contact">
                                <Layout className="event-active__contact-header">
                                    <Text className="event-active__contact-title" fontSize={SizeEnum.large}>
                                        Контакты
                                    </Text>
                                </Layout>
                                <Text className="event-active__description" fontSize={SizeEnum.short}>
                                    {contact}
                                </Text>
                            </Layout>
                        )}
                        <Text className="event-active__date">Дата: {date}</Text>
                        <Text className="event-active__place">Место: {place}</Text>
                    </Layout>
                    <Layout className="event-active__navigate">
                        <Layout className="event-active__source-container">
                            <Text className="event-active__source" fontSize={SizeEnum.medium}>
                                Источник:
                            </Text>
                            <Link href={vk ?? ''}>
                                <Icon
                                    className="event-active__link"
                                    fontAwesomeIcon={faVk}
                                    heightType={SizeEnum.medium}
                                />
                            </Link>
                            <Link href={telegram ?? ''}>
                                <Icon
                                    className="event-active__link"
                                    fontAwesomeIcon={faTelegram}
                                    heightType={SizeEnum.medium}
                                />
                            </Link>
                        </Layout>
                        <Text className="event-active__button" onClick={onClickHandler} fontSize={SizeEnum.medium}>
                            Меньше
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
        );
    }

    return (
        <Layout className="event">
            <Layout className="event__container">
                <Layout className="event__body">
                    <Layout className="event__info">
                        <Text className="event__title" fontSize={SizeEnum.medium}>
                            {title}
                        </Text>
                        <Text className="event__date" fontSize={SizeEnum.short}>{`Дата: ${date}`}</Text>
                    </Layout>
                    <Layout className="event__more-container">
                        <Text className="event__more" onClick={onClickHandler} fontSize={SizeEnum.short}>
                            Подробнее
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    );
};

export { Event };
