import React from 'react';

import { Button } from 'components/core/Button';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
    it('Button renders', () => {
        render(<Button onClick={() => null} />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Button with icon haven`t button role', () => {
        render(<Button icon={faEye} title="Eye" onClick={() => null} />);

        expect(screen.queryByRole('button')).toBeNull();
    });

    it('Button snapshot', () => {
        const button = render(<Button icon={faEye} title="Eye" onClick={() => null} />);

        expect(button).toMatchSnapshot();
    });

    it('Button with icon snapshot', () => {
        const button = render(<Button onClick={() => null} />);

        expect(button).toMatchSnapshot();
    });

    it('Button styles working', () => {
        render(<Button onClick={() => null} />);

        expect(screen.getByRole('button')).toHaveClass('button');
    });
});
