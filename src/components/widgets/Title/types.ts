import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';

export interface ITitle {
    className?: string;
    children?: React.ReactNode;
    fontSize?: SizeEnum;
    fontWeight?: WeightEnum;
    onClick?: any;
}
