export interface IEditUserModel {
    option: IEditUserModalOptions;
    onClose: () => void;
}

export interface IEditUserModalOptions {
    user: any;
    onEditUserHandler: (id: string, data: IEditUserDataModel) => void;
}

export interface IEditUserDataModel {
    id: string;
    firstname: string;
    lastname: string;
    surname: string;
    workPlace: string;
    position: string;
    phone: string;
}
