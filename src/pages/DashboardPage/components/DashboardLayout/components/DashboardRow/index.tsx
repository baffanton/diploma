import React from 'react';

import { Layout } from 'components/widgets/Layout';

import { ControlPanel } from './components/ControlPanel';
import { IControlPanelItem } from './components/ControlPanel/types';
import { IDashboardRow } from './types';

import './style.scss';

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
