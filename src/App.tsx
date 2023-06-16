import PageBuilder from 'modules/PageBuilder';
import './App.scss';
import { fetchUser } from 'store/reducers/UserReducer/actions';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <PageBuilder />
    );
}

export default App;
