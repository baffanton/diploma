import { combineReducers } from '@reduxjs/toolkit';
import { userRecuder } from './UserReducer';
import { tableReducer } from './TableReducer';
import { homePageReducer } from './HomePageReducer';
import { pageReducer } from './PageReducer';

const reducer = combineReducers({
    user: userRecuder,
    table: tableReducer,
    page: pageReducer,
    homePage: homePageReducer,
});

export { reducer };
