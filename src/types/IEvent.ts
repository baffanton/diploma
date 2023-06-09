export interface IEvent {
    id: string;
    shortTitle?: string;
    title: string;
    date: string;
    place: string;
    description: {
        main: string;
        contact?: string;
    };
    post: {
        vk?: string;
        telegram?: string;
    };
}