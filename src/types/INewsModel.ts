export interface INewsModel {
    id: string;
    title: string;
    description: string;
    source: {
        vk: string;
        tg: string;
    };
    picture: string;
}
