import React from 'react';

import { Layout } from 'components/core/Layout';

import { Icon } from '../Icon';
import { ITextBox } from './types';
import cx from 'classnames';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { InputTypesEnum } from 'enums/inputTypes';
import { SizeEnum } from 'enums/sizeTypes';

import './style.scss';

const TextBox: React.FC<ITextBox> = (
    {
        id,
        name = '',
        label,
        onChange,
        classNameInput = '',
        classNameLabel = '',
        classNameContainer = '',
        placeholder = '',
        error,
        register,
        value,
        icon,
        onIconClick,
        labelPosition,
        type = InputTypesEnum.text,
        heightType = SizeEnum.medium,
        colorTheme = ColorThemeType.primary,
        disabled,
    },
    { ...props },
) => {
    const inputClassNames = cx(
        'text-box__input',
        `text-box__input_color_${colorTheme}`,
        `text-box__input_height_${heightType}`,
        classNameInput,
    );
    const labelClassNames = cx(
        'text-box__label',
        `text-box__label_color_${colorTheme}`,
        `text-box__label_height_${heightType}`,
        classNameLabel,
    );
    const containerClassNames = cx(
        'text-box__wrapper',
        labelPosition && `text-box__wrapper_label_${labelPosition}`,
        classNameContainer,
    );
    const labelContainerClassNames = cx(
        'text-box__label-container',
        `text-box__label-container_position_${labelPosition}`,
    );

    const inputRow = () => {
        if (icon) {
            return (
                <Layout className="text-box__input-container">
                    <input
                        id={id}
                        name={name}
                        className={inputClassNames}
                        placeholder={placeholder}
                        type={type}
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                        autoComplete={type === InputTypesEnum.password ? 'on' : 'off'}
                        {...register}
                    />
                    <Icon
                        className="text-box__icon"
                        onClick={onIconClick}
                        fontAwesomeIcon={icon}
                        heightType={SizeEnum.short}
                    />
                </Layout>
            );
        }

        return (
            <input
                id={id}
                name={name}
                className={inputClassNames}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
                disabled={disabled}
                autoComplete={type === InputTypesEnum.password ? 'on' : 'off'}
                {...register}
            />
        );
    };

    return (
        <Layout className={containerClassNames}>
            <Layout className={labelContainerClassNames}>
                {label && (
                    <label className={labelClassNames} htmlFor={id}>
                        {label}
                    </label>
                )}
                {error && (
                    <p className={cx('text-box__error', `text-box__error_theme_${colorTheme}`)}>{error.message}</p>
                )}
            </Layout>
            {inputRow()}
        </Layout>
    );
};

export { TextBox };
