import { Layout } from 'widgets/Layout';
import { Text } from 'ui/Text';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontSizesEnum } from 'enums/fontSizeTypes';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

interface INewsModal {
    onClose: any;
    option: any;
}

const NewsModal: React.FC<INewsModal> = ({ onClose, option }) => {
    const { title, description, picture } = option;

    return (
        <Layout className='news-modal'>
            <Layout className='news-modal__header'>
                <Text className='news-modal__title' fontSize={FontSizesEnum.large}>{title}</Text>
                <FontAwesomeIcon className='news-modal__close' onClick={() => onClose()} icon={faXmark} />
            </Layout>
            <Layout className='news-modal__content'>
                <Layout className='news-modal__main'>
                    <Text className='news-modal__description'>{description}</Text>
                    <Layout className='news-modal__source'>
                        <Text className='news-modal__source-title'>Источники: </Text>
                        <Layout className='news-modal__source-container'>
                            <FontAwesomeIcon className='news-modal__source-item' icon={faVk} />
                            <FontAwesomeIcon className='news-modal__source-item' icon={faTelegram} />
                        </Layout>
                    </Layout>
                </Layout>
                <img className='news-modal__picture' src={picture} alt="" />
            </Layout>
        </Layout>
    )
}

export { NewsModal };
