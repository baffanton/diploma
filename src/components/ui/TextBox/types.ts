import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { InputTypesEnum } from 'enums/inputTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { SizeEnum } from 'enums/sizeTypes';

export interface ITextBox {
    id: string;
    name?: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    placeholder?: string;
    error?: any;
    register?: any;
    value?: string;
    icon?: IconDefinition;
    onIconClick?: any;
    labelPosition?: LabelPositionEnum;
    type?: InputTypesEnum;
    heightType?: SizeEnum;
    colorTheme?: ColorThemeType;
    disabled?: boolean;
}
