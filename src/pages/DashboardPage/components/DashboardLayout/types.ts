import { IControlPanelItem } from './components/DashboardRow/components/ControlPanel/types';
import { UserRolesEnum } from 'enums/userTypes';

export interface IDashboardLayout {
    auth: boolean;
    role: UserRolesEnum;
}

export interface IControlRow {
    id: string;
    panels: IControlPanelItem[];
}
