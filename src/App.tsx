import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import PageBuilder from 'components/shared/PageBuilder';

import store from 'store';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PageBuilder />
            </Provider>
        </BrowserRouter>
    );
}

export default App;
