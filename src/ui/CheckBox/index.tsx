import cx from 'classnames';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { HeightTypes } from 'enums/heightTypes';

interface ICheckBox {
    id: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    checked?: boolean;
    errors?: any;
    register?: any;
    colorTheme?: ColorThemeType;
    heightType?: HeightTypes;
    disabled?: boolean;
}

const CheckBox: React.FC<ICheckBox> = ({
    id,
    label,
    onChange,
    onClick,
    classNameInput = '',
    classNameLabel = '',
    classNameContainer = '',
    checked,
    errors,
    register,
    colorTheme = ColorThemeType.primary,
    heightType = HeightTypes.medium,
    disabled
}) => {
    const inputClassNames = cx(
        'check-box__input',
        classNameInput);
    const labelClassNames = cx(
        'check-box__label',
        `check-box__label_color_${colorTheme}`,
        `check-box__label_height_${heightType}`,
        classNameLabel);
    const containerClassNames = cx('check-box__wrapper', classNameContainer);
    return (
        <Layout className={containerClassNames}>
            <input 
                className={inputClassNames} 
                id={id}
                type="checkbox" 
                checked={checked} 
                onChange={onChange}
                onClick={onClick}
                disabled={disabled}
                {...register}
            />
            <label className={labelClassNames} htmlFor={id}>{label}</label>
            {errors && (
                <Layout className='check-box__error'>{errors}</Layout>
            )}
        </Layout>
    )
}

export { CheckBox };
