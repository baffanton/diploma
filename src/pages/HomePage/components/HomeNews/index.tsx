import { Column } from 'ui/Field';
import './style.scss';
import { News } from './components/News';

const HomeNews: React.FC<any> = () => {
    return (
        <Column className="home-news" fullHeight>
            <p className="home-news__title">Последние новости</p>
            <Column fullHeight>
                <News />
                <News />
                <News />
                <News />
            </Column>
        </Column>
    )
}

export { HomeNews };
