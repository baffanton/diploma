import { JustifyContentTypes } from "enums/flexTypes";
import { Header } from "modules/Header";
import { Row } from "ui/Field";
import { HomeEvents } from "./components/HomeEvents";
import { HomeHelp } from "./components/HomeHelp";
import { HomeNews } from "./components/HomeNews";
import './style.scss';

const HomePage: React.FC<any> = () => {
    const withHeader = true;
    return (
        <>
            {withHeader && <Header />}
            <Row className="home-page" jc={JustifyContentTypes.spaceBetween} fullHeight>
                <HomeHelp />
                <HomeNews />
                <HomeEvents />
            </Row>
        </>
        
    )
}

export { HomePage };
