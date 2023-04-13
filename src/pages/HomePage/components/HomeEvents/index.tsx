import { Column, Row } from 'ui/Field';
import { configEvents } from './config';
import { Event } from './components/Event';
import './style.scss';

const HomeEvents: React.FC<any> = () => {
    return (
        <Column className="home-events" fullHeight>
            <p className="home-events__title">Мероприятия</p>
            <Row wrap fullHeight>
                {configEvents.map(event => {
                    return <Event key={event.id} event={event} />
                })}
            </Row>
        </Column>
    )
}

export { HomeEvents };
