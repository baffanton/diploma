import { Event } from './components/Event';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { Text } from 'ui/Text';
import { IEvent } from 'types/IEvent';

interface IHomeEvents {
    events: IEvent[];
}

const HomeEvents: React.FC<IHomeEvents> = ({ events }) => {
    if (!events) {
        return null;
    }

    return (
        <Layout className="home-events">
            <Text className="home-events__title">Мероприятия</Text>
            <Layout className='home-events__container'>
                {events.map(event => {
                    return <Event key={event.id} event={event} />
                })}
            </Layout>
        </Layout>
    )
}

export { HomeEvents };
