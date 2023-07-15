import React from 'react';

import { IIcon } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

import './style.scss';

const Icon: React.FC<IIcon> = ({ src, className = '', pointer, heightType, fontAwesomeIcon, onClick, disabled }) => {
    const classNames = cx(
        'icon',
        (pointer || onClick) && 'icon_pointer',
        `icon_heightType_${heightType}`,
        disabled && 'icon_disabled',
        className,
    );

    const onClickHandler = () => {
        if (disabled) {
            return null;
        }

        if (onClick) {
            return onClick();
        }
    };

    if (fontAwesomeIcon) {
        return <FontAwesomeIcon className={classNames} onClick={() => onClickHandler()} icon={fontAwesomeIcon} />;
    }

    return <img className={classNames} onClick={() => onClickHandler()} src={src} alt="" />;
};

export { Icon };
