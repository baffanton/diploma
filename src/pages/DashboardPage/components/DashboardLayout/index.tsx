import { Layout } from 'widgets/Layout';
import { DashboardRow } from './components/DashboardRow';
import { ControlRows } from './config';
import { Text } from 'widgets/Text';
import './style.scss';
import { IDashboardLayout } from './types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { UserRolesEnum } from 'enums/userTypes';
import { useNavigate } from 'react-router-dom';

const DashboardLayout: React.FC<IDashboardLayout> = ({ auth, role }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && role === UserRolesEnum.user) {
            navigate('/home');
        }
    }, [auth, role]);

    return (
        <Layout className="dashboard-layout">
            <Text className="dashboard-layout__title">Панель управления</Text>
            <Layout className="dashboard-layout__controls">
                {ControlRows.map(({ id, panels }) => {
                    return <DashboardRow key={id} panels={panels} />;
                })}
            </Layout>
        </Layout>
    );
};

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        auth: user.auth,
        role: user.role,
    };
};

export default connect(mapStateToProps)(DashboardLayout);
