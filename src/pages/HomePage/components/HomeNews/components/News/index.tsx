import './style.scss';
import { Layout } from 'widgets/Layout';
import { closeModal, openModal } from 'store/reducers/PageReducer/actions';
import { connect } from 'react-redux';
import { ModalTypes } from 'enums/modalTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { Text } from 'widgets/Text';
import { Title } from 'widgets/Title';
import { INewsModalOptions } from 'ui/Modal/components/NewsModal/types';
import { INews } from './types';
import { Icon } from 'ui/Icon';

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
                        <Title
                            className="news__title"
                            fontSize={SizeEnum.short}
                        >
                            {title}
                        </Title>
                        <Layout className="news__more-container">
                            <Text
                                className="news__more"
                                fontSize={SizeEnum.short}
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
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        openModal(
            modalTypes: ModalTypes,
            onClose: () => void,
            option: INewsModalOptions,
        ) {
            return dispatch(openModal(modalTypes, onClose, option));
        },
        closeModal() {
            return dispatch(closeModal());
        },
    };
};

export default connect(null, mapDispatchToProps)(News);
