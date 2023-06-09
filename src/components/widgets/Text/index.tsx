import cx from 'classnames';
import './style.scss';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';
import { StyleEnum } from 'enums/styleTypes';
import { IText } from './types';
import React from 'react';

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
