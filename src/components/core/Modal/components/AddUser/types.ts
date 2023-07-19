export interface IAddUserModal {
    onClose: () => void;
    option: IAddUserModalOptions;
}

export interface IAddUserModalOptions {
    onAddUserHandler: (id: string, data: IAddUserDataModel) => void;
}

export interface IAddUserDataModel {
    firstname: string;
    lastname: string;
    surname: string;
    workPlace: string;
    position: string;
    phone: string;
}
