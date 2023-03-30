export interface IPage {
    id: string;
    url: string;
    withHeader: boolean;
    access: {
        admin: boolean;
        user: boolean;
    }
}

export const pages: IPage[] = [
    {
        id: 'auth',
        url: '/',
        withHeader: false,
        access: {
            admin: true,
            user: true
        }
    },
    {
        id: 'home',
        url: '/home',
        withHeader: true,
        access: {
            admin: true,
            user: true
        }
    },
    {
        id: 'team',
        url: '/team',
        withHeader: true,
        access: {
            admin: true,
            user: true
        }
    },
    {
        id: 'material-help',
        url: '/material-help',
        withHeader: true,
        access: {
            admin: true,
            user: false
        }
    },
    {
        id: 'legal-help',
        url: '/legal-help',
        withHeader: true,
        access: {
            admin: true,
            user: false
        }
    },
    {
        id: 'sport',
        url: '/sport',
        withHeader: true,
        access: {
            admin: true,
            user: false
        }
    },
    {
        id: 'awards',
        url: '/awards',
        withHeader: true,
        access: {
            admin: true,
            user: false
        }
    },
    {
        id: 'education',
        url: '/education',
        withHeader: true,
        access: {
            admin: true,
            user: false
        }
    },
]