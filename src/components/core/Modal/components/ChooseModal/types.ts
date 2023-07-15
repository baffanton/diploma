export interface IChooseModal {
    onClose: () => void;
    option: IChooseModalOptions;
}

export interface IChooseModalOptions {
    message: string;
    onAccept: () => void;
    onAcceptTitle: string;
    onCancelTitle: string;
    title: string;
}
