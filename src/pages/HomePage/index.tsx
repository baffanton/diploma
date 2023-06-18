import Header from "modules/Header";
import { HomeEvents } from "./components/HomeEvents";
import { HomeNews } from "./components/HomeNews";
import './style.scss';
import { Layout } from "widgets/Layout";
import { fetchEvents, fetchNews } from "store/reducers/HomePageReducer/actions";
import { connect } from "react-redux";
import { Dispatch, useEffect } from "react";
import { IFetchEvents, IFetchNews } from "store/reducers/HomePageReducer/types";
import { IEventModel } from "types/IEventModel";
import { INewsModel } from "types/INewsModel";
import { fetchUser } from "store/reducers/UserReducer/actions";
import { hideLoader, showLoader } from "store/reducers/PageReducer/actions";
import { IHideLoader, IShowLoader } from "store/reducers/PageReducer/types";

interface IHomePage {
    fetchNews: () => Dispatch<IFetchNews>;
    fetchEvents: () => Dispatch<IFetchEvents>;
    events: IEventModel[];
    news: INewsModel[];
    auth: boolean;
    fetchUser: () => any;
    showLoader: () => Dispatch<IShowLoader>;
    hideLoader: () => Dispatch<IHideLoader>;
}

const HomePage: React.FC<IHomePage> = ({ news, events, fetchNews, fetchEvents, auth, fetchUser, showLoader, hideLoader }) => {
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
    )
}

const mapStateToProps = (state: any) => {
    const { homePage, user } = state;

    return {
        news: homePage.news,
        events: homePage.events,
        auth: user.auth,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNews() { return dispatch(fetchNews()); },
        fetchEvents(){ return dispatch(fetchEvents()); },
        fetchUser() { return dispatch(fetchUser()); },
        showLoader() { return dispatch(showLoader()); },
        hideLoader() { return dispatch(hideLoader()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
