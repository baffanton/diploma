import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { SizeEnum } from 'enums/sizeTypes';

interface IIcon {
    src?: string;
    className?: string;
    pointer?: boolean;
    heightType?: SizeEnum;
    fontAwesomeIcon?: IconDefinition;
    onClick?: any;
}

const Icon: React.FC<IIcon> = ({
    src,
    className = '',
    pointer,
    heightType,
    fontAwesomeIcon,
    onClick,
}) => {
    const classNames = cx(
        'icon',
        (pointer || onClick) && 'icon_pointer',
        `icon_heightType_${heightType}`,
        className,
    );

    if (fontAwesomeIcon) {
        return (
            <FontAwesomeIcon className={classNames} onClick={onClick} icon={fontAwesomeIcon} />
        )
    }

    return (
        <img className={classNames} onClick={onClick} src={src} alt="" />
    )

    
}

export { Icon };
