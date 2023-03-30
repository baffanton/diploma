import { useState } from 'react';
import { Column, Row } from 'ui/Field';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { configEvents, IEvent } from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
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

interface IEventElememt {
    event: IEvent;
}

const Event: React.FC<IEventElememt> = ({ event }) => {
    const [moreClicked, setMoreClicked] = useState<boolean>(false);

    const onClickHandler = () => {
        return setMoreClicked(!moreClicked);
    }

    const { 
        shortTitle, 
        title, 
        date, 
        place, 
        description: {
            main, 
            add, 
            time, 
            contact }, 
        post: { 
            vk, 
            telegram
        } 
    } = event;

    if (moreClicked) {
        return (
            <Row className="event event_isActive">
                <Column className="event__body" fullHeight>
                    <Column className="event__info">
                        <p className="event__title">{title}</p>
                        <p className="event__date event__date_isActive">Дата: {date}</p>
                        <p className="event__place event__place_isActive">Место: {place}</p>
                        {time && <p className='event__description'><strong>{time}</strong></p>}
                        <p className='event__description'>{main}</p>
                        {add && <p className='event__description'>{add}</p>}
                        {contact && <p className='event__description'>{contact}</p>}
                    </Column>
                    <Row fullHeight ai={AlignItemsTypes.flexEnd} jc={JustifyContentTypes.flexEnd}>
                        {(vk || telegram) && (
                            <Row ai={AlignItemsTypes.center}>
                                <p className="event__source">Источник:</p>
                                {vk && (
                                    <a href={vk} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="event__link event__link_isVk" icon={faVk} />
                                    </a>
                                )}
                                {telegram && (
                                    <a href={telegram} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="event__link event__link_isTelegram" icon={faTelegram} />
                                    </a>
                                )}
                            </Row>
                        )}
                        <p 
                            className="event__button" 
                            onClick={onClickHandler}
                        >
                            {moreClicked ? "Меньше" : "Подробнее"}
                        </p> 
                    </Row>
                </Column>
            </Row>
        )
    }

    return (
        <Row className="event">
            <Column className="event__body" fullHeight>
                <Column className="event__info">
                    <p className="event__title">{shortTitle || title}</p>
                    <p className="event__date">Дата: {date}</p>
                    <p className="event__place">Место: {place}</p>
                </Column>
                <Row fullHeight ai={AlignItemsTypes.flexEnd} jc={JustifyContentTypes.flexEnd}>
                    <p 
                        className="event__button" 
                        onClick={onClickHandler}
                    >
                        {moreClicked ? "Меньше" : "Подробнее"}
                    </p> 
                </Row>
            </Column>
        </Row>
    )
}

export { HomeEvents };
