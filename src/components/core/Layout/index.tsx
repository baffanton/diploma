import React from 'react';

import { ILayout } from './types';
import cx from 'classnames';

import './style.scss';

const Layout: React.FC<ILayout> = ({ className, children, onClick }) => {
    return (
        <div className={cx('layout', className)} onClick={onClick}>
            {children}
        </div>
    );
};

export { Layout };
