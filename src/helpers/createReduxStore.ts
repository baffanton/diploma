import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'store/reducers';

export const createReduxStore = (initialState: any) => {
    return configureStore({
        reducer: reducer,
        preloadedState: initialState,
    });
};
