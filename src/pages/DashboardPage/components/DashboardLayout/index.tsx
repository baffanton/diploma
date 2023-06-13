import { Layout } from 'widgets/Layout';
import { DashboardRow } from './components/DashboardRow';
import { ControlRows } from './config';
import { Text } from 'widgets/Text';
import './style.scss';


const DashboardLayout = () => {
    return (
        <Layout className="dashboard-layout">
            <Text className="dashboard-layout__title">Панель управления</Text>
            <Layout className="dashboard-layout__controls">
                {ControlRows.map(({id, panels}) => {
                    return <DashboardRow key={id} panels={panels} />
                })}
            </Layout>
        </Layout>
    )
}

export { DashboardLayout };
