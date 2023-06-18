import { Event } from './components/Event';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { IEventModel } from 'types/IEventModel';
import { Title } from 'widgets/Title';
import { WeightEnum } from 'enums/weightTypes';
import { SizeEnum } from 'enums/sizeTypes';

interface IHomeEvents {
    events: IEventModel[];
}

const HomeEvents: React.FC<IHomeEvents> = ({ events }) => {
    if (!events) {
        return null;
    }

    return (
        <Layout className="home-events">
            <Title
                className="home-events__title"
                fontWeight={WeightEnum.bold}
                fontSize={SizeEnum.short}
            >
                Мероприятия
            </Title>
            <Layout className='home-events__container'>
                {events.map(event => {
                    return <Event key={event.id} event={event} />
                })}
            </Layout>
        </Layout>
    )
}

export { HomeEvents };
