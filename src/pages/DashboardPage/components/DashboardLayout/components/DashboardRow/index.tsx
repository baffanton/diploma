import './style.scss';
import { IControlPanel } from '../../config';
import { ControlPanel } from './components/ControlPanel';
import { Layout } from 'widgets/Layout';
import { IDashboardRow } from './types';

const DashboardRow: React.FC<IDashboardRow> = ({ panels }) => {
    return (
        <Layout className="dashboard-row">
            {panels.map((controlPanel: IControlPanel) => (
                <ControlPanel key={controlPanel.id} panel={controlPanel} />
            ))}
        </Layout>
    );
};

export { DashboardRow };
