import React from 'react';
import { IText } from './types';
import cx from 'classnames';
import { SizeEnum } from 'enums/sizeTypes';
import { StyleEnum } from 'enums/styleTypes';
import { WeightEnum } from 'enums/weightTypes';
import './style.scss';

const Text: React.FC<IText> = ({
    className,
    children,
    fontSize = SizeEnum.medium,
    fontWeight = WeightEnum.default,
    fontStyle = StyleEnum.default,
    onClick,
    pointer,
}) => {
    const classNames = cx(
        'text',
        `text_size_${fontSize}`,
        `text_style_${fontStyle}`,
        `text_weight_${fontWeight}`,
        (onClick || pointer) && 'text_cursor_pointer',
        className,
    );

    return (
        <p className={classNames} onClick={onClick}>
            {children}
        </p>
    );
};

export { Text };
