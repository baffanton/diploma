import React from 'react';

import { Layout } from '../Layout';

import './style.scss';

const Loader = () => {
    return (
        <Layout className="loader__wrapper">
            <span className="loader"></span>
        </Layout>
    );
};

export { Loader };
