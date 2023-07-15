import React from 'react';

import { Layout } from 'components/core/Layout';
import { Title } from 'components/core/Title';

import { Event } from './components/Event';
import { IHomeEvents } from './types';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';

import './style.scss';

const HomeEvents: React.FC<IHomeEvents> = ({ events }) => {
    if (!events) {
        return null;
    }

    return (
        <Layout className="home-events">
            <Title className="home-events__title" fontWeight={WeightEnum.bold} fontSize={SizeEnum.medium}>
                Мероприятия
            </Title>
            <Layout className="home-events__container">
                {events.map((event) => {
                    return <Event key={event.id} event={event} />;
                })}
            </Layout>
        </Layout>
    );
};

export { HomeEvents };
