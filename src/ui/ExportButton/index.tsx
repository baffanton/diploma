import { Row } from "ui/Field";
import cx from 'classnames';
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { AlignItemsTypes } from "enums/flexTypes";

interface IExportButton {
    className?: string;
    onClick: any;
}

const ExportButton: React.FC<IExportButton> = ({ className, onClick }) => {

    const classNames = cx('export-button', className);

    return (
        <Row className={classNames} onClick={onClick} noFlex ai={AlignItemsTypes.center}>
            <Row className="export-button__title" fullHeight ai={AlignItemsTypes.center}>Экспорт</Row>
            <FontAwesomeIcon className="export-button__icon" icon={faDownload} />
        </Row>
    )
}

export { ExportButton };
