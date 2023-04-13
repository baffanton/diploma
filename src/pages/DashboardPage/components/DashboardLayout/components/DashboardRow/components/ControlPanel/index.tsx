import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Column } from 'ui/Field';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes } from 'enums/flexTypes';

const ControlPanel: React.FC<any> = ({ panel }) => {
    const navigate = useNavigate();

    const { id, title, icon, url } = panel;

    const clickHandler = () => {
        return navigate(url);
    }

    return (
        <Column key={id} className="control-panel" ai={AlignItemsTypes.center} onClick={clickHandler}>
            <FontAwesomeIcon className="control-panel__icon" icon={icon} />
            <p className="control-panel__title">{title}</p>
        </Column>
    )
}

export { ControlPanel };
