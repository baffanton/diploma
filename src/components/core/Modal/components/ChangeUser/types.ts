import { ChangeUserDataTypes } from 'enums/changeUserDataTypes';

export interface IChangeUserModal {
    option: IChangeUserModalOptions;
    onClose: () => void;
}

export interface IChangeUserModalOptions {
    type: ChangeUserDataTypes;
    user?: any;
    onSubmitHandler: (id: string, data: IChangeUserDataModel) => void;
}

export interface IChangeUserDataModel {
    firstname: string;
    lastname: string;
    surname: string;
    workPlace: string;
    position: string;
    phone: string;
}
