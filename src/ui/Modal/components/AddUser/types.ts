export interface IAddUserModal {
    onClose: () => any;
    option: IAddUserModalOptions;
}

export interface IAddUserModalOptions {
    onAddUserHandler: (data: IAddUserDataModel) => void;
}

export interface IAddUserDataModel {
    firstname: string;
    lastname: string;
    surname: string;
    username: string;
    password: string;
}
