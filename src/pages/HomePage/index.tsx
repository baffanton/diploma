import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'components/core/Layout';
import Header from 'components/shared/Header';
import { HomeEvents } from './components/HomeEvents';
import { HomeNews } from './components/HomeNews';
import { IHomePage } from './types';
import { fetchEvents, fetchNews } from 'store/reducers/HomePageReducer/actions';
import './style.scss';

const HomePage: React.FC<IHomePage> = ({ news, events, fetchNews, fetchEvents }) => {
    useEffect(() => {
        fetchNews();
        fetchEvents();
    }, []);

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

const mapStateToProps = (state) => {
    const { homePage } = state;

    return {
        news: homePage.news,
        events: homePage.events,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchNews() {
            return dispatch(fetchNews());
        },
        fetchEvents() {
            return dispatch(fetchEvents());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
