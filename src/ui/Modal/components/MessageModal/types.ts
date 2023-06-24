export interface IMessageModal {
    onClose: () => void;
    option: IMessageModalOptions;
}

export interface IMessageModalOptions {
    message: string;
    title?: string;
}
