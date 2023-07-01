import './style.scss';
import News from './components/News';
import { Layout } from 'widgets/Layout';
import { Title } from 'widgets/Title';
import { WeightEnum } from 'enums/weightTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { IHomeNews } from './types';

const HomeNews: React.FC<IHomeNews> = ({ news }) => {
    if (!news) {
        return null;
    }

    return (
        <Layout className="home-news">
            <Title className="home-news__title" fontWeight={WeightEnum.bold} fontSize={SizeEnum.medium}>
                Последние новости
            </Title>
            <Layout className="home-news__container">
                {news.map((item) => {
                    return <News key={item.id} item={item} />;
                })}
            </Layout>
        </Layout>
    );
};

export { HomeNews };
