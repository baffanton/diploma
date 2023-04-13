import { Row } from "ui/Field";
import cx from 'classnames';
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { AlignItemsTypes } from "enums/flexTypes";

interface IButtonWithIcon {
    className?: string;
    onClick: any;
    icon: IconDefinition;
    title: string;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({ className, onClick, icon, title }) => {

    const classNames = cx('button-w-icon', className);

    return (
        <Row className={classNames} onClick={onClick} noFlex ai={AlignItemsTypes.center}>
            <Row className="button-w-icon__title" fullHeight ai={AlignItemsTypes.center}>{title}</Row>
            <FontAwesomeIcon className="button-w-icon__icon" icon={icon} />
        </Row>
    )
}

export { ButtonWithIcon };
