import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { SizeEnum } from 'enums/sizeTypes';

export interface IButton {
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    heightType?: SizeEnum;
    colorTheme?: ColorThemeType;
    icon?: IconDefinition;
    title?: string;
}
