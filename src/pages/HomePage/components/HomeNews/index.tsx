import './style.scss';
import { News } from './components/News';
import { Layout } from 'widgets/Layout';
import { INewsModel, configNews } from './config';

const HomeNews: React.FC<any> = () => {
    const config: INewsModel[] = configNews;
    return (
        <Layout className="home-news">
            <p className="home-news__title">Последние новости</p>
            <Layout className='home-news__container'>
                {config.map(news => {
                    return (
                        <News key={news.id} item={news} />
                    )
                })}
            </Layout>
        </Layout>
    )
}

export { HomeNews };
