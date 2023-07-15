import { SizeEnum } from 'enums/sizeTypes';
import { StyleEnum } from 'enums/styleTypes';
import { WeightEnum } from 'enums/weightTypes';

export interface IText {
    className?: string;
    children?: React.ReactNode;
    fontSize?: SizeEnum;
    onClick?: () => void;
    pointer?: boolean;
    fontWeight?: WeightEnum;
    fontStyle?: StyleEnum;
}
