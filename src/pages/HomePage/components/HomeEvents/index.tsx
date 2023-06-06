import { configEvents } from './config';
import { Event } from './components/Event';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { Text } from 'ui/Text';

const HomeEvents: React.FC<any> = () => {
    return (
        <Layout className="home-events">
            <Text className="home-events__title">Мероприятия</Text>
            <Layout className='home-events__container'>
                {configEvents.map(event => {
                    return <Event key={event.id} event={event} />
                })}
            </Layout>
        </Layout>
    )
}

export { HomeEvents };
