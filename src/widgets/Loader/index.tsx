import { Layout } from 'widgets/Layout';
import './style.scss';

const Loader = () => {
    return (
        <Layout className="loader__wrapper">
            <span className="loader"></span>
        </Layout>
    );
};

export { Loader };
