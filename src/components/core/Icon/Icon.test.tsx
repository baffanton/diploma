import React from 'react';
import { Icon } from 'components/core/Icon';
import { fireEvent, render, screen } from '@testing-library/react';
import { SizeEnum } from 'enums/sizeTypes';

describe('Icon tests', () => {
    it('Icon render', () => {
        const { container } = render(<Icon className="icon__test" heightType={SizeEnum.medium} />);

        expect(container.getElementsByClassName('icon')[0]).toHaveClass('icon__test', 'icon_heightType_m');
    });
    it('Button dosn`t respond with disabled', () => {
        let clickWorking = false;
        const onClickHandler = () => {
            clickWorking = true;
        };
        const { container } = render(<Icon onClick={onClickHandler} pointer disabled />);
        const iconElement = container.getElementsByClassName('icon')[0];

        fireEvent.click(iconElement);

        expect(iconElement).toHaveClass('icon_pointer');
        expect(clickWorking).toEqual(false);
    });
});
