import './style.scss';
import { Layout } from 'widgets/Layout';
import { Text } from "ui/Text";
import { FontSizesEnum } from 'enums/fontSizeTypes';
import { INewsModel } from '../../config';
import { closeModal, openModal } from 'store/reducers/ModalReducer/actions';
import { useDispatch } from 'react-redux';
import { ModalTypes } from 'enums/modalTypes';

interface INews {
    item: INewsModel;
}

const News: React.FC<INews> = ({ item }) => {
    const dispatch = useDispatch();
    const { title, description, source, picture } = item;
    const onClickMoreHandler = () => {
        // @ts-ignore
        dispatch(openModal(ModalTypes.news, onCloseModalHandler, { title, description, source, picture }))
    }

    const onCloseModalHandler = () => {
        // @ts-ignore
        dispatch(closeModal());
    }

    return (
        <Layout className="news">
            <Layout className="news__body">
                <img className='news__picture' src={picture} alt="" />
                <Layout className='news__description'>
                    <Text className="news__title" fontSize={FontSizesEnum.large}>{title}</Text>
                    <Layout className='news__more-container'>
                        <Text className='news__more' fontSize={FontSizesEnum.medium} onClick={onClickMoreHandler}>Подробнее</Text>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}

export { News };
