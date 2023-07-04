import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigateFunction, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import { Layout } from 'components/widgets/Layout';
import { Loader } from 'components/widgets/Loader';

import { getModal } from './helpers';
import { IPageBuilder } from './types';
import AuthPage from 'pages/AuthPage';
import { DashboardPage } from 'pages/DashboardPage';
import DashboardLayout from 'pages/DashboardPage/components/DashboardLayout';
import DashboardMore from 'pages/DashboardPage/components/DashboardMore';
import { DashboardPagesConfig } from 'pages/DashboardPage/config';
import HomePage from 'pages/HomePage';
import { fetchUser } from 'store/reducers/UserReducer/actions';

import './style.scss';

const PageBuilder: React.FC<IPageBuilder> = ({ isOpenModal, modal, loaderPoints, fetchUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            return navigate('/');
        }

        fetchUser(navigate);
    }, []);

    return (
        <Layout className="page">
            {loaderPoints > 0 && <Loader />}
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route
                    path="/dashboard/*"
                    element={
                        <>
                            <DashboardPage />
                            <Outlet />
                        </>
                    }
                >
                    <Route index element={<DashboardLayout />} />
                    {DashboardPagesConfig.map((page) => {
                        return <Route key={page.id} path={page.id} element={<DashboardMore page={page} />} />;
                    })}
                </Route>
            </Routes>
            {getModal(isOpenModal, modal)}
        </Layout>
    );
};

const mapStateToProps = (state: any) => {
    const { page } = state;

    return {
        isOpenModal: page.isOpenModal,
        modal: page.modal,
        loaderPoints: page.loaderPoints,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUser(navigate: NavigateFunction) {
            return dispatch(fetchUser(navigate));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageBuilder);
