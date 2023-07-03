import cx from 'classnames';
import './style.scss';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { ICheckBox } from './types';
import { Layout } from 'components/widgets/Layout';

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
    heightType = SizeEnum.medium,
    disabled,
}) => {
    const inputClassNames = cx('check-box__input', classNameInput);
    const labelClassNames = cx(
        'check-box__label',
        `check-box__label_color_${colorTheme}`,
        `check-box__label_height_${heightType}`,
        classNameLabel,
    );
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
            <label className={labelClassNames} htmlFor={id}>
                {label}
            </label>
            {errors && <Layout className="check-box__error">{errors}</Layout>}
        </Layout>
    );
};

export { CheckBox };
