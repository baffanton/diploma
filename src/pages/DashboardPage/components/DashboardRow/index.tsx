import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlignItemsTypes } from 'enums/flexTypes';
import { IControlPanel } from 'pages/DashboardPage/config';
import { useNavigate } from 'react-router-dom';
import { Column, Row } from 'ui/Field';
import './style.scss';

interface IDashboardRow {
    panels: IControlPanel[];
}

const DashboardRow: React.FC<IDashboardRow> = ({ panels }) => {
    return (
        <Row className="dashboard-row" noFlex>
            {panels.map((controlPanel: IControlPanel) => <ControlPanel key={controlPanel.id} panel={controlPanel} />)}
        </Row>
    )
}

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

export { DashboardRow };
