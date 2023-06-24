import { closeModal, openModal } from 'store/reducers/PageReducer/actions';
import { IHomeHelp } from './types';
import { ModalTypes } from 'enums/modalTypes';
import { connect } from 'react-redux';
import { Button } from 'ui/Button';
import { Layout } from 'widgets/Layout';
import './style.scss';

const HomeHelp: React.FC<IHomeHelp> = ({ openModal, closeModal }) => {
    const onClickHandler = () => {};

    return (
        <Layout className="home-help">
            <Button className="home-help__button" onClick={onClickHandler}>
                Заказать справку
            </Button>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        openModal(modalType: ModalTypes, onClose: any, option: any) {
            return dispatch(openModal(modalType, onClose, option));
        },
        closeModal() {
            return dispatch(closeModal());
        },
    };
};

export default connect(null, mapDispatchToProps)(HomeHelp);
