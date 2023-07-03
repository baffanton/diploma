import './style.scss';
import { ControlPanel } from './components/ControlPanel';
import { IDashboardRow } from './types';
import { IControlPanelItem } from './components/ControlPanel/types';
import { Layout } from 'components/widgets/Layout';

const DashboardRow: React.FC<IDashboardRow> = ({ panels }) => {
    return (
        <Layout className="dashboard-row">
            {panels.map((controlPanel: IControlPanelItem) => (
                <ControlPanel key={controlPanel.id} panel={controlPanel} />
            ))}
        </Layout>
    );
};

export { DashboardRow };
