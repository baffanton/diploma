import { UserRolesEnum } from 'enums/userTypes';
import { IControlPanelItem } from './components/DashboardRow/components/ControlPanel/types';

export interface IDashboardLayout {
    auth: boolean;
    role: UserRolesEnum;
}

export interface IControlRow {
    id: string;
    panels: IControlPanelItem[];
}
