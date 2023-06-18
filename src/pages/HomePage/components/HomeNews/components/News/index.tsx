import './style.scss';
import { Layout } from 'widgets/Layout';
import { closeModal, openModal } from 'store/reducers/PageReducer/actions';
import { connect } from 'react-redux';
import { ModalTypes } from 'enums/modalTypes';
import { INewsModel } from 'types/INewsModel';
import { ICloseModal, IOpenModal } from 'store/reducers/PageReducer/types';
import { Dispatch } from 'react';
import { SizeEnum } from 'enums/sizeTypes';
import { Text } from 'widgets/Text';

interface INews {
    item: INewsModel;
    openModal: (modalTypes: ModalTypes, onClose: () => void, option: any) => Dispatch<IOpenModal>;
    closeModal: () => Dispatch<ICloseModal>;
}

const News: React.FC<INews> = ({ item, openModal, closeModal }) => {
    const { title, description, source, picture } = item;
    
    const onClickMoreHandler = () => {
        openModal(ModalTypes.newsModal, onCloseModalHandler, { title, description, source, picture })
    }

    const onCloseModalHandler = () => {
        closeModal();
    }

    return (
        <Layout className="news">
            <Layout className='news__container'>
                <Layout className="news__body">
                    <img className='news__picture' src={picture} alt="" />
                    <Layout className='news__description'>
                        <Text className="news__title" fontSize={SizeEnum.medium}>{title}</Text>
                        <Layout className='news__more-container'>
                            <Text
                                className='news__more'
                                fontSize={SizeEnum.medium}
                                onClick={onClickMoreHandler}
                                pointer
                            >
                                Подробнее
                            </Text>
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        openModal(modalTypes: ModalTypes, onClose: () => void, option: any) {
            return dispatch(openModal(modalTypes, onClose, option));
        },
        closeModal(){ return dispatch(closeModal()); },
    }
}

export default connect(null, mapDispatchToProps)(News);
