import './style.scss';
import { IControlPanel } from '../../config';
import { ControlPanel } from './components/ControlPanel';
import { Row } from 'ui/Field';

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

export { DashboardRow };
