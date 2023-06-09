export interface INewsModel {
    id: string;
    title: string;
    description: string;
    source: {
        vk?: string;
        telegram?: string;
    },
    picture: string;
}