import cx from 'classnames';
import './style.scss';
import { SizeTypes } from 'enums/sizeTypes';
import { ColorThemeType } from 'enums/colorThemeTypes';

interface IButton {
    onClick?: any;
    type?: string;
    className?: string;
    disabled?: boolean;
    title?: string;
    children?: React.ReactNode;
    sizeType?: SizeTypes;
    colorTheme?: ColorThemeType;
}

const Button: React.FC<IButton> = ({
    onClick,
    className = '',
    children,
    disabled,
    sizeType = SizeTypes.medium,
    colorTheme = ColorThemeType.primary
}) => {
    const classNames = cx(
        'button', 
        `button_size_${sizeType}`,
        `button_theme_${colorTheme}`,
        className 
    );

    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export { Button };
