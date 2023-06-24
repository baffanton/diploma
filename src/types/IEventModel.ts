export interface IEventModel {
    id: string;
    title: string;
    date: string;
    place: string;
    description: {
        main: string;
        contact?: string;
    };
    source: {
        vk?: string;
        telegram?: string;
    };
}
