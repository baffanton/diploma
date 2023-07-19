import React from 'react';
import { Button } from 'components/core/Button';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button tests', () => {
    it('Button renders', () => {
        render(<Button onClick={() => null} />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Button with icon haven`t button role', () => {
        render(<Button icon={faEye} title="Eye" onClick={() => null} />);

        expect(screen.queryByRole('button')).toBeNull();
    });

    it('Button with icon snapshot', () => {
        const button = render(<Button icon={faEye} title="Eye" onClick={() => null} />);

        expect(button).toMatchSnapshot();
    });

    it('Button snapshot', () => {
        const button = render(<Button onClick={() => null} />);

        expect(button).toMatchSnapshot();
    });

    it('Button styles working', () => {
        render(<Button onClick={() => null} />);

        expect(screen.getByRole('button')).toHaveClass('button');
    });
    it('Button dosn`t respond with disabled', () => {
        let clickWorking = false;
        const onClickHandler = () => {
            clickWorking = true;
        };
        render(<Button onClick={onClickHandler} disabled />);

        fireEvent.click(screen.getByRole('button'));

        expect(clickWorking).toEqual(false);
    });
});
