export interface IEditUserModel {
    option: IEditUserModalOptions;
    onClose: () => void;
}

export interface IEditUserModalOptions {
    user: any;
    onEditUserHandler: (data: IEditUserDataModel) => void;
}

export interface IEditUserDataModel {
    firstname: string;
    lastname: string;
    surname: string;
    username: string;
    password: string;
}
