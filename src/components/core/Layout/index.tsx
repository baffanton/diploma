import React from 'react';

import { ILayout } from './types';
import cx from 'classnames';

import './style.scss';

const Layout: React.FC<ILayout> = ({ className, children, onClick, id }) => {
    return (
        <div className={cx('layout', className)} id={id} data-testid={id} onClick={onClick}>
            {children}
        </div>
    );
};

export { Layout };
