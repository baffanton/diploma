import Header from 'modules/Header';
import { HomeEvents } from './components/HomeEvents';
import { HomeNews } from './components/HomeNews';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { fetchEvents, fetchNews } from 'store/reducers/HomePageReducer/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { IHomePage } from './types';
import HomeHelp from './components/HomeHelp';

const HomePage: React.FC<IHomePage> = ({
    news,
    events,
    fetchNews,
    fetchEvents,
}) => {
    useEffect(() => {
        fetchNews();
        fetchEvents();
    }, []);

    return (
        <>
            <Header />
            <Layout className="home-page">
                <HomeNews news={news} />
                <Layout className="home-page__events-help">
                    <HomeEvents events={events} />
                    <HomeHelp />
                </Layout>
            </Layout>
        </>
    );
};

const mapStateToProps = (state: any) => {
    const { homePage } = state;

    return {
        news: homePage.news,
        events: homePage.events,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
