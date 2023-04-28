import { Layout } from 'widgets/Layout';
import './style.scss';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { SizeTypes } from 'enums/sizeTypes';
import cx from 'classnames';

interface IInputCheckbox {
    id: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    checked?: boolean;
    register?: any;
    error?: any;
    disabled?: boolean;
    colorTheme?: ColorThemeType;
    sizeType?: SizeTypes;
}

const InputCheckbox: React.FC<IInputCheckbox> = ({
    id,
    label,
    onClick,
    onChange,
    colorTheme = ColorThemeType.primary,
    sizeType = SizeTypes.medium,
    classNameInput = '',
    classNameContainer = '',
    classNameLabel = '',
    register,
    error,
    disabled
}) => {
    const classNamesInput = cx(
        'input-checkbox__input', 
        `input-checkbox__input_theme_${colorTheme}`,
        `input-checkbox__input_size_${sizeType}`,
        classNameInput);
    const classNamesLabel = cx(
        'input-checkbox__label', 
        `input-checkbox__label_size_${sizeType}`,
        `input-checkbox__label_theme_${colorTheme}`,
        classNameLabel);
    const classNamesContainer = cx(
        'input-checkbox__container', 
        classNameContainer);

    return (
        <Layout className={classNamesContainer}>
            <input 
                className={classNamesInput} 
                id={id} 
                type="checkbox" 
                disabled={disabled}
                onChange={onChange}
                onClick={onClick}
                {...register}
            />
            <label className={classNamesLabel} htmlFor={id}>{label}</label>
            {error && (
                <Layout className='input-checkbox__error'>{error.message}</Layout>
            )}
        </Layout>
    )
}

export { InputCheckbox };
