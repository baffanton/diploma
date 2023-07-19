import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'store/reducers';

export const createReduxStore = (initialState) => {
    return configureStore({
        reducer: reducer,
        preloadedState: initialState,
    });
};
