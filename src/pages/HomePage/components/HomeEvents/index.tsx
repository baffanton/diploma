import { Event } from './components/Event';
import './style.scss';
import { WeightEnum } from 'enums/weightTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { IHomeEvents } from './types';
import { Layout } from 'components/widgets/Layout';
import { Title } from 'components/widgets/Title';

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
