import React from 'react';
import { ITitle } from './types';
import cx from 'classnames';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';
import './style.scss';

const Title: React.FC<ITitle> = ({
    className = '',
    fontSize = SizeEnum.medium,
    fontWeight = WeightEnum.default,
    onClick,
    children,
}) => {
    const classNames = cx('title', `title_size_${fontSize}`, `title_weight_${fontWeight}`, className);

    return (
        <p className={classNames} onClick={onClick}>
            {children}
        </p>
    );
};

export { Title };
