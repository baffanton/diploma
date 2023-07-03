import React from 'react';
import { ILayout } from './types';
import './style.scss';
import cx from 'classnames';

const Layout: React.FC<ILayout> = ({ className, children, onClick }) => {
    return (
        <div className={cx('layout', className)} onClick={onClick}>
            {children}
        </div>
    );
};

export { Layout };
