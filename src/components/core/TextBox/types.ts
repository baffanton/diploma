import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { InputTypesEnum } from 'enums/inputTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { SizeEnum } from 'enums/sizeTypes';

export interface ITextBox {
    id: string;
    name?: string;
    label?: string;
    onClick?: () => void;
    onChange?: () => void;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    placeholder?: string;
    error?: FieldError;
    register?: UseFormRegisterReturn;
    value?: string;
    icon?: IconDefinition;
    onIconClick?: () => void;
    labelPosition?: LabelPositionEnum;
    type?: InputTypesEnum;
    heightType?: SizeEnum;
    colorTheme?: ColorThemeType;
    disabled?: boolean;
}
