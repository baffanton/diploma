import { ColorThemeType } from 'enums/colorThemeTypes';
import { SizeEnum } from 'enums/sizeTypes';

export interface ICheckBox {
    id: string;
    label?: string;
    onClick?: () => void;
    onChange?: () => void;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    checked?: boolean;
    errors?: any;
    register?: any;
    colorTheme?: ColorThemeType;
    heightType?: SizeEnum;
    disabled?: boolean;
}
