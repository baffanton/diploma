export interface INewsModal {
    onClose: any;
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
