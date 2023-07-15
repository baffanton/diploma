export interface INewsModal {
    onClose: () => void;
    option: INewsModalOptions;
}

export interface INewsModalOptions {
    title: string;
    description: string;
    source: {
        vk: string;
        tg: string;
    };
    picture: string;
}
