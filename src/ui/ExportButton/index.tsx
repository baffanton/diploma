import React from 'react';
import cx from 'classnames';
import './style.scss';
import { Row } from 'ui/Field';
import { AlignItemsTypes } from 'enums/flexTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface IExportButton {
    className?: string;
    url: string;
}

const ExportButton: React.FC<IExportButton> = ({ className, url }) => {
    const classNames = cx('export-button', className);

    return (
        <a className={classNames} href={url}>
            <Row noFlex ai={AlignItemsTypes.center}>
                <Row className="export-button__title" fullHeight ai={AlignItemsTypes.center}>Экспорт</Row>
                <FontAwesomeIcon className="export-button__icon" icon={faDownload} />
            </Row>
        </a>
    )
}

export { ExportButton };
