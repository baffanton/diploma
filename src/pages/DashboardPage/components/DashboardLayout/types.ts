import { UserRolesEnum } from 'enums/userTypes';

export interface IDashboardLayout {
    auth: boolean;
    role: UserRolesEnum;
}
