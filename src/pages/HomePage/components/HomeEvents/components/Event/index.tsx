import { useState } from 'react';
import { IEvent } from '../../config';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { Layout } from 'widgets/Layout';
import { Text } from 'ui/Text';
import { FontSizesEnum } from 'enums/fontSizeTypes';

interface IEventElememt {
    event: IEvent;
}

const Event: React.FC<IEventElememt> = ({ event }) => {
    const [moreClicked, setMoreClicked] = useState<boolean>(false);

    const onClickHandler = () => {
        return setMoreClicked(!moreClicked);
    }

    const { shortTitle, title, date, place, description: {main, contact }, post: { vk, telegram } } = event;

    if (moreClicked) {
        return (
            <Layout className="event-active">
                <Layout className='event-active__header'>
                    <Text className="event-active__title" fontSize={FontSizesEnum.large}>{title}</Text>
                </Layout>
                <Layout className="event-active__body">
                    <Layout className="event-active__info">
                        <Text className='event-active__description'>{main}</Text>
                        {contact && (
                            <Layout className='event-active__contact'>
                                <Layout className='event-active__contact-header'>
                                    <Text className='event-active__contact-title' fontSize={FontSizesEnum.large}>Контакты</Text>
                                </Layout>
                                <Text className='event-active__description'>{contact}</Text>
                            </Layout>
                        )}
                        <Text className="event-active__date">Дата: {date}</Text>
                        <Text className="event-active__place">Место: {place}</Text>
                    </Layout>
                    <Layout className='event-active__navigate'>
                        <Layout className='event-active__source-container'>
                            <Text className="event-active__source">Источник:</Text>
                            <a href={vk} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="event-active__link" icon={faVk} />
                            </a>
                            <a href={telegram} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="event-active__link" icon={faTelegram} />
                            </a>
                        </Layout>
                        <Text className="event-active__button" onClick={onClickHandler}>Меньше</Text> 
                    </Layout>
                </Layout>
            </Layout>
        )
    }

    return (
        <Layout className="event">
            <Layout className="event__body">
                <Layout className="event__info">
                    <Text className="event__title" fontSize={FontSizesEnum.large}>{shortTitle || title}</Text>
                    <Text className="event__date" fontSize={FontSizesEnum.medium}>Дата: {date}</Text>
                    <Text className="event__place" fontSize={FontSizesEnum.medium}>Место: {place}</Text>
                </Layout>
                <Layout className='event__more-container'>
                    <Text className="event__more" onClick={onClickHandler} fontSize={FontSizesEnum.medium}>Подробнее</Text> 
                </Layout>
            </Layout>
        </Layout>
    )
}

export { Event };
