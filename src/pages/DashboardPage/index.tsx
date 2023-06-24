import Header from 'modules/Header';

const DashboardPage = () => {
    const withHeader = true;
    return <>{withHeader && <Header />}</>;
};

export { DashboardPage };
