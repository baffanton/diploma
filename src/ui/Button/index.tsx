import cx from 'classnames';
import './style.scss';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Layout } from 'widgets/Layout';
import { Text } from 'widgets/Text';
import { Icon } from 'ui/Icon';
import { SizeEnum } from 'enums/sizeTypes';

interface IButton {
    onClick?: any;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    heightType?: SizeEnum;
    colorTheme?: ColorThemeType;
    icon?: IconDefinition;
    title?: string;
}

const Button: React.FC<IButton> = ({
    onClick,
    className = '',
    children,
    disabled,
    heightType = SizeEnum.medium,
    colorTheme = ColorThemeType.primary,
    icon,
    title = '',
}) => {
    const classNames = cx(
        'button', 
        `button_height_${heightType}`,
        `button_theme_${colorTheme}`,
        className 
    );

    const onClickHandler = () => {
        if (!disabled) {
            return onClick();
        }
    }

    if (icon) {
        const iconClassNames = cx('button__icon', `button__icon_theme_${colorTheme}`);

        return (
            <Layout className={cx('button_with-icon', classNames)} onClick={onClickHandler}>
                <Text className='button__title'>{title}</Text>
                <Icon className={iconClassNames} fontAwesomeIcon={icon} heightType={SizeEnum.short} />
            </Layout>
        )
    }

    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export { Button };
