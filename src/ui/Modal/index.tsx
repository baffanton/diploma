import { ModalTypes } from 'enums/modalTypes';
import './style.scss';
import { Column } from 'ui/Field';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getModal } from './helpers';

interface IModalProps {
    type: ModalTypes;
    closeModal: any;
    option: any;
}

const Modal: React.FC<IModalProps> = ({type, closeModal, option}) => {
    return (
        <Column ai={AlignItemsTypes.center} jc={JustifyContentTypes.center} className="modal-window">
            <Column className='modal-window__wrapper'>
                <FontAwesomeIcon className='modal-window__close' onClick={() => closeModal()} icon={faXmark} />
                {getModal(type, closeModal, option)}
            </Column>
        </Column>
    );
}

export { Modal };
