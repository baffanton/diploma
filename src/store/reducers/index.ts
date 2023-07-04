import { homePageReducer } from './HomePageReducer';
import { pageReducer } from './PageReducer';
import { tableReducer } from './TableReducer';
import { userRecuder } from './UserReducer';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
    user: userRecuder,
    table: tableReducer,
    page: pageReducer,
    homePage: homePageReducer,
});

export { reducer };
