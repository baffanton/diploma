import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './createReduxStore';
import { render } from '@testing-library/react';

export const renderWithRedux = (component: React.ReactNode, initialState) => {
    const store = createReduxStore(initialState);

    return render(<Provider store={store}>{component}</Provider>);
};
