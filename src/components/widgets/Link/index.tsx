import React from 'react';

import { ILink } from './types';
import cx from 'classnames';

import './style.scss';

const Link: React.FC<ILink> = ({ children, href, className = '', onClick }) => {
    const classNames = cx('link', className);

    return (
        <a className={classNames} href={href} onClick={onClick} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
};

export { Link };
