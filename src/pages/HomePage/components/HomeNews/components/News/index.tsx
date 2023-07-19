import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { INewsModalOptions } from 'components/core/Modal/components/NewsModal/types';
import { Text } from 'components/core/Text';
import { Title } from 'components/core/Title';
import { INews } from './types';
import { ModalTypes } from 'enums/modalTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { closeModal, openModal } from 'store/reducers/PageReducer/actions';
import './style.scss';

const News: React.FC<INews> = ({ item, openModal, closeModal }) => {
    const { title, description, source, picture } = item;

    const onClickMoreHandler = () => {
        openModal(ModalTypes.newsModal, onCloseModalHandler, {
            title,
            description,
            source,
            picture,
        });
    };

    const onCloseModalHandler = () => {
        closeModal();
    };

    return (
        <Layout className="news">
            <Layout className="news__container">
                <Layout className="news__body">
                    <Icon className="news__picture" src={picture} />
                    <Layout className="news__description">
                        <Title className="news__title" fontSize={SizeEnum.short}>
                            {title}
                        </Title>
                        <Layout className="news__more-container">
                            <Text className="news__more" fontSize={SizeEnum.short} onClick={onClickMoreHandler} pointer>
                                Подробнее
                            </Text>
                        </Layout>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal(modalTypes: ModalTypes, onClose: () => void, option: INewsModalOptions) {
            return dispatch(openModal(modalTypes, onClose, option));
        },
        closeModal() {
            return dispatch(closeModal());
        },
    };
};

export default connect(null, mapDispatchToProps)(News);
