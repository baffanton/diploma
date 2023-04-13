export interface IUserModel {
    id: string;
    username: string;
    role: string;
    gender: string;
    age: string;
}

export interface IAwardsModel {
    name: string;
    description: string;
    type: string;
    points: number;
}

export interface IEventsModel {
    name: string;
    description: string;
    address: string;
    date: string;
    type: string;
}

export interface IUserEventsModel {
    user: string;
    events: string;
    type: string;
}

export interface IUserAwardsModel {
    user: string;
    awards: string;
    date: string;
}