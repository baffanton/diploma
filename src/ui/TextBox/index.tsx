import cx from 'classnames';
import './style.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Layout } from 'widgets/Layout';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { InputTypesEnum } from 'enums/inputTypes';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { Icon } from 'ui/Icon';
import { SizeEnum } from 'enums/sizeTypes';

interface ITextBox {
    id: string;
    name?: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    placeholder?: string;
    error?: any;
    register?: any;
    value?: string;
    icon?: IconDefinition;
    onIconClick?: any;
    labelPosition?: LabelPositionEnum;
    type?: InputTypesEnum;
    heightType?: SizeEnum;
    colorTheme?: ColorThemeType;
    disabled?: boolean;
}

const TextBox: React.FC<ITextBox> = ({
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
    disabled
}) => {
    const inputClassNames = cx(
        'text-box__input',
        `text-box__input_color_${colorTheme}`,
        `text-box__input_height_${heightType}`,
        classNameInput);
    const labelClassNames = cx(
        'text-box__label',
        `text-box__label_color_${colorTheme}`,
        `text-box__label_height_${heightType}`,
        classNameLabel);
    const containerClassNames = cx(
        'text-box__wrapper', 
        labelPosition && `text-box__wrapper_label_${labelPosition}`,
        classNameContainer);
    const labelContainerClassNames = cx(
        'text-box__label-container',
        `text-box__label-container_position_${labelPosition}`
    )

    const inputRow = () => {
        if (icon) {
            return (
                <Layout className='text-box__input-container'>
                    <input
                        id={id}
                        name={name}
                        className={inputClassNames} 
                        placeholder={placeholder} 
                        type={type}
                        onChange={onChange}
                        value={value}
                        disabled={disabled}
                        {...register}
                    />
                    <Icon
                        className="text-box__icon"
                        onClick={onIconClick}
                        fontAwesomeIcon={icon}
                        heightType={SizeEnum.short}
                    />
                </Layout>
            )
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
                {...register}
            />
        )
    }

    return (
        <Layout className={containerClassNames}>
            <Layout className={labelContainerClassNames}>
                {label && <label className={labelClassNames} htmlFor={id}>{label}</label>}
                {error && <p className="text-box__error">{error.message}</p>}
            </Layout>
            {inputRow()}
        </Layout>
    )
}

export { TextBox };
