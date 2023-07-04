import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Layout } from 'components/widgets/Layout';
import { Text } from 'components/widgets/Text';

import { DashboardRow } from './components/DashboardRow';
import { ControlRows } from './config';
import { IDashboardLayout } from './types';
import { UserRolesEnum } from 'enums/userTypes';

import './style.scss';

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
