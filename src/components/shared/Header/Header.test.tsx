import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './index';
import { UserRolesEnum } from 'enums/userTypes';
import { renderWithRedux } from 'helpers/renderWithRedux';
import { initialState as homePageInitialState } from 'store/reducers/HomePageReducer';
import { initialState as pageInitialState } from 'store/reducers/PageReducer';
import { initialState as tableInitialState } from 'store/reducers/TableReducer';

describe('Header tests', () => {
    it('Header work with ReduxStore', () => {
        const initialState = {
            user: {
                firstname: 'Антон',
                lastname: 'Баяндин',
                surname: 'Викторович',
                imageUrl: null,
                role: UserRolesEnum.admin,
                auth: true,
            },
            table: tableInitialState,
            page: pageInitialState,
            homePage: homePageInitialState,
        };

        const { getByText } = renderWithRedux(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            initialState,
        );

        expect(getByText('Баяндин А.В.')).toBeInTheDocument();
    });
    it('Header hasn`t link to DashboardPage without admin`s role', () => {
        const initialState = {
            user: {
                firstname: 'Антон',
                lastname: 'Баяндин',
                surname: 'Викторович',
                imageUrl: null,
                role: UserRolesEnum.user,
                auth: true,
            },
            table: tableInitialState,
            page: pageInitialState,
            homePage: homePageInitialState,
        };

        const { container } = renderWithRedux(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            initialState,
        );

        const items = container.getElementsByClassName('header__settings');

        expect(items.length).toEqual(0);
    });
});
