import { ColorThemeType } from 'enums/colorThemeTypes';
import cx from 'classnames';
import './style.scss';
import { SizeTypes } from 'enums/sizeTypes';
import { Layout } from 'widgets/Layout';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface IInputText {
    id: string;
    value?: string;
    onChange?: any;
    colorTheme?: ColorThemeType;
    sizeType?: SizeTypes;
    label?: string;
    labelPosition?: LabelPositionEnum;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    placeholder?: string;
    register?: any;
    error?: any;
    isPassword?: boolean;
    disabled?: boolean;
    autoComplete?: boolean;
}

const InputText: React.FC<IInputText> = ({
    id,
    value,
    onChange,
    colorTheme = ColorThemeType.primary,
    sizeType = SizeTypes.medium,
    label,
    labelPosition = LabelPositionEnum.top,
    classNameInput,
    classNameLabel,
    classNameContainer,
    placeholder = '',
    register,
    error,
    isPassword,
    disabled = false,
    autoComplete = true
}) => {
    const classNamesInput = cx(
        'input-text__input', 
        `input-text__input_theme_${colorTheme}`,
        `input-text__input_size_${sizeType}`,
        classNameInput);
    const classNamesLabel = cx(
        'input-text__label', 
        `input-text__label_theme_${colorTheme}`,
        `input-text__label_size_${sizeType}`,
        `input-text__label_position_${labelPosition}`,
        classNameLabel);
    const classNamesContainer = cx(
        'input-text__container', 
        label && `input-text__container_label-position_${labelPosition}`,
        classNameContainer);

    return (
        <Layout className={classNamesContainer}>
            {(label || error) && (
                <Layout className={cx('input-text__manage', error && 'input-text__manage_withError')}>
                    {label && <Layout className={classNamesLabel}>{label}</Layout>}
                    {error && (
                        <Layout className='input-text__error'>
                            <FontAwesomeIcon className='input-text__error-icon' icon={faCircleExclamation} />
                            <Layout className='input-text__error-message'>{error.message}</Layout>
                        </Layout>
                    )}
                </Layout>
            )}
            <input 
                className={classNamesInput}
                id={id}
                type={isPassword ? 'password' : 'text'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                autoComplete={autoComplete ? "on" : 'off'}
                {...register}
            />
        </Layout>
    )
}

export { InputText };
