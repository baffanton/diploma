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

interface IHomePage {
    fetchNews: () => Dispatch<IFetchNews>;
    fetchEvents: () => Dispatch<IFetchEvents>;
    events: IEventModel[];
    news: INewsModel[];
}

const HomePage: React.FC<IHomePage> = ({ news, events, fetchNews, fetchEvents }) => {
    useEffect(() => {
        fetchNews();
        fetchEvents();
    }, [fetchEvents, fetchNews])

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
    const { homePage } = state;

    return {
        news: homePage.news,
        events: homePage.events,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchNews() {
            return dispatch(fetchNews());
        },
        fetchEvents(){
            return dispatch(fetchEvents());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
