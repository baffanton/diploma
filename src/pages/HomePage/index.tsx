import Header from "modules/Header";
import { HomeEvents } from "./components/HomeEvents";
import { HomeNews } from "./components/HomeNews";
import './style.scss';
import { Layout } from "widgets/Layout";

const HomePage: React.FC<any> = () => {
    const withHeader = true;
    return (
        <>
            {withHeader && <Header />}
            <Layout className="home-page">
                <HomeNews />
                <HomeEvents />
            </Layout>
        </>
        
    )
}

export { HomePage };
