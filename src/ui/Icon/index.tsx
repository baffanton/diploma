import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { IIcon } from './types';

const Icon: React.FC<IIcon> = ({
    src,
    className = '',
    pointer,
    heightType,
    fontAwesomeIcon,
    onClick,
    disabled,
}) => {
    const classNames = cx(
        'icon',
        (pointer || onClick) && 'icon_pointer',
        `icon_heightType_${heightType}`,
        disabled && 'icon_disabled',
        className,
    );

    if (fontAwesomeIcon) {
        return (
            <FontAwesomeIcon
                className={classNames}
                onClick={onClick}
                icon={fontAwesomeIcon}
            />
        );
    }

    return <img className={classNames} onClick={onClick} src={src} alt="" />;
};

export { Icon };
