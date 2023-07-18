import React from 'react';

import { IEventModel } from './types';
import { fireEvent, render, screen } from '@testing-library/react';

import { Event } from '.';

describe('Event tests', () => {
    it('Click to button open more info about event', () => {
        const event: IEventModel = {
            id: 'event',
            title: 'Заголовок',
            date: '02.01.2001',
            place: 'Березники',
            description: {
                main: 'Описание',
                contact: 'Контакты',
            },
            source: {},
        };

        const { container } = render(<Event event={event} />);

        const openMoreButton = container.getElementsByClassName('event__more')[0];
        fireEvent.click(openMoreButton);

        expect(screen.getByTestId('event-active')).toBeInTheDocument();
    });
});
