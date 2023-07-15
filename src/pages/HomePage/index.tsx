import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'components/core/Layout';

import { HomeEvents } from './components/HomeEvents';
import { HomeNews } from './components/HomeNews';
import { IHomePage } from './types';
import Header from 'components/shared/Header';
import { fetchEvents, fetchNews } from 'store/reducers/HomePageReducer/actions';
import { hideLoader, showLoader } from 'store/reducers/PageReducer/actions';

import './style.scss';

const HomePage: React.FC<IHomePage> = ({ news, events, fetchNews, fetchEvents, auth }) => {
    useEffect(() => {
        if (auth) {
            fetchNews();
            fetchEvents();
        }
    }, [auth]);

    return (
        <>
            <Header />
            <Layout className="home-page">
                <HomeNews news={news} />
                <HomeEvents events={events} />
            </Layout>
        </>
    );
};

const mapStateToProps = (state: any) => {
    const { homePage, user } = state;

    return {
        news: homePage.news,
        events: homePage.events,
        auth: user.auth,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNews() {
            return dispatch(fetchNews());
        },
        fetchEvents() {
            return dispatch(fetchEvents());
        },
        showLoader() {
            return dispatch(showLoader());
        },
        hideLoader() {
            return dispatch(hideLoader());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
