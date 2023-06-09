import './style.scss';
import News from './components/News';
import { Layout } from 'widgets/Layout';
import { INewsModel } from 'types/INewsModel';

interface IHomeNews {
    news: INewsModel[];
}

const HomeNews: React.FC<IHomeNews> = ({ news }) => {
    if (!news) {
        return null;
    }

    return (
        <Layout className="home-news">
            <p className="home-news__title">Последние новости</p>
            <Layout className='home-news__container'>
                {news.map(item => {
                    return (
                        <News key={item.id} item={item} />
                    )
                })}
            </Layout>
        </Layout>
    )
}

export { HomeNews };
