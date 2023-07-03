import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SizeEnum } from 'enums/sizeTypes';

export interface IIcon {
    src?: string;
    className?: string;
    pointer?: boolean;
    heightType?: SizeEnum;
    fontAwesomeIcon?: IconDefinition;
    onClick?: () => void;
    disabled?: boolean;
}
